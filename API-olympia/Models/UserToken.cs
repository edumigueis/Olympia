using System;
using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class UserToken
       {
           [Key]
           public int idToken { get; set; }
           public string Token { get; set; }
           public DateTime Expiration { get; set; }
       }
}