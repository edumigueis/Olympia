using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Artes
    {
        [Key]
        public int IdArte { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "O Nome não deve ter mais do que 30 caracteres.")]
        public string Nome { get; set; }
    }
}