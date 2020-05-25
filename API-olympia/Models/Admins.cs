using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Admins
    {
        [Key]
        public int IdUser { get; set; }
         public string User { get; set; }
        public string Password { get; set; }

        public string Email { get; set; }
    }
}