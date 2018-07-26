using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DatingApp.API.Dtos;
using System.Collections.Generic;
using System.Security.Claims;
using System;
using DatingApp.API.Helpers;
using DatingApp.API.Models;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    [ServiceFilter(typeof(LogUserActivity))]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IDatingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        // api/users //GET
        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUser = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var userFromRepo = await _repo.GetUser(currentUser);

            userParams.UserId = currentUser;

            if(string.IsNullOrEmpty(userParams.Gender))
            {
                userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
            }

            var users = await _repo.GetUsers(userParams);

            var usersForReturn = _mapper.Map<IEnumerable<UsersForListDto>>(users);

            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(usersForReturn);
        }

        // api/users/1 //GET
        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userForReturn = _mapper.Map<UserForDetailDto>(user);
            return Ok(userForReturn);
        }

        // api/users/1 //PUT
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserForUpdateDto userForUpdateDto) 
        {   
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var currentUser = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var userFromRepo = await _repo.GetUser(id);

            if(userFromRepo==null) {
                return NotFound($"Could not find user with ID: {id}");
            }

            if(currentUser != userFromRepo.Id) {
                return Unauthorized();
            }

            _mapper.Map(userForUpdateDto, userFromRepo);

            if(await _repo.SaveAll()) {
                return NoContent();
            }

            throw new Exception($"Updating user {id} failed.");
        }

        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var like = await _repo.GetLike(id, recipientId);
            if(like != null) 
            {
                return BadRequest("You already liked this user!");
            }

            if(await _repo.GetUser(recipientId) == null)
            {
                return NotFound("The user you have like doesn't exist");
            }

            like = new Like{
                LikerId = id,
                LikeeId = recipientId
            };

            _repo.Add<Like>(like);
            if(await _repo.SaveAll())
            {
                return Ok(new {});
            }

            return BadRequest("Like Failed");
                
        }
    }
}