using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Admins
    {
        [Key]
        public int IdAdmin { get; set; }
        
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Senha { get; set; }

        public string Email { get; set; }
    }
}