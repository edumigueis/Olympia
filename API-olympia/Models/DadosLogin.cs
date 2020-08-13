using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class DadosLogin
    {
        [Required]
        public string User { get; set; }

        [Required]
        public string Senha { get; set; }
    }
}
