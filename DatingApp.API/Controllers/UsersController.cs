using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DatingApp.API.Dtos;
using System.Collections.Generic;
using System.Security.Claims;
using System;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : Controller
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
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var usersForReturn = _mapper.Map<IEnumerable<UsersForListDto>>(users);
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
    }
}