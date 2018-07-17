using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UsersForListDto>()
                .ForMember(dest => dest.PhotoURL, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).URL);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculatAge());
                });

            CreateMap<User, UserForDetailDto>()
                .ForMember(dest => dest.PhotoURL, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).URL);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculatAge());
                });
            CreateMap<Photo, PhotosForDetailDto>();
            CreateMap<PhotoForCreationDto, Photo>();
            CreateMap<Photo, PhotoForReturnDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<MessageForCreationDto, Message>().ReverseMap();
            CreateMap<Message, MessageToReturnDto>()
                .ForMember(m => m.SenderPhotoUrl, opt => {
                    opt.MapFrom(u => u.Sender.Photos.FirstOrDefault(p => p.IsMain).URL);
                })
                .ForMember(m => m.RecipientPhotoUrl, opt => {
                    opt.MapFrom(u => u.Recipient.Photos.FirstOrDefault(p => p.IsMain).URL);
                });
        }
    }
}