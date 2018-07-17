using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/[controller]")]
    [ServiceFilter(typeof(LogUserActivity))]
    public class MessagesController : Controller
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public MessagesController(IDatingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetMessagesForUser(int userId, MessageParams messageParams)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var messageFromRepo = await _repo.GetMessagesForUser(messageParams);

            var messages = _mapper.Map<IEnumerable<MessageToReturnDto>>(messageFromRepo);

            Response.AddPagination(messageFromRepo.CurrentPage, messageFromRepo.PageSize, messageFromRepo.TotalCount, messageFromRepo.TotalPages);

            return Ok(messages);
        }

        [HttpGet("{id}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage(int userId, int id)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var messageFromRepo = await _repo.GetMessage(id);

            if(messageFromRepo == null)
                return NotFound();
            else
                return Ok(messageFromRepo);
        }

        [HttpGet("thread/{id}")]
        public async Task<IActionResult> GetMessageThread(int userId, int id)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var messagesFromRepo = await _repo.GetMessageThread(userId, id);

            var messagesThread = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);

            if(messagesThread == null)
                return NotFound();
            else
                return Ok(messagesThread);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMessage(int userId, [FromBody] MessageForCreationDto messageForCreationDto)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            messageForCreationDto.SenderId = userId;
            
            var recipient = await _repo.GetUser(messageForCreationDto.RecipientId);
            var sender = await _repo.GetUser(messageForCreationDto.SenderId);
            if(recipient == null)
            {
                return BadRequest("Could not find recipient user");
            }

            var message = _mapper.Map<Message>(messageForCreationDto);
            _repo.Add(message);

            var messageToReturn = _mapper.Map<MessageToReturnDto>(message);

            if(await _repo.SaveAll())
            {
                return CreatedAtRoute("GetMessage", new {id = message.Id}, messageToReturn);
            }

            throw new Exception("Message sending failed on save");
        }

        [HttpPost("{id}")]
        public async Task<IActionResult> DeleteMessage(int id, int userId)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var messageFromRepo = await _repo.GetMessage(id);

            if(messageFromRepo.SenderId == userId)
                messageFromRepo.SenderDeleted = true;
            
            if(messageFromRepo.RecipientId == userId)
                messageFromRepo.RecipientDeleted = true;            

            if(messageFromRepo.SenderDeleted && messageFromRepo.RecipientDeleted)
            {
                _repo.Delete(messageFromRepo);
            }

            if (await _repo.SaveAll())
            {
                return NoContent();
            }

            throw new Exception("Error while deleting user message");
        }

        [HttpPost("{id}/read")]
        public async Task<IActionResult> MarkMessageAsRead(int id, int userId)
        {
            if(userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }
            var messageFromRepo = await _repo.GetMessage(id);

            if(messageFromRepo.RecipientId != userId)
                return BadRequest("Failed to mark message as read");

            messageFromRepo.IsRead = true;
            messageFromRepo.DateRead = DateTime.Now;

            if (await _repo.SaveAll())
            {
                return NoContent();
            }

            throw new Exception("Error while deleting user message");
        }

    }
}