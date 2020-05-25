using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class LoginViewModel
    {
        
        [Required]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Senha { get; set; }
    }
}