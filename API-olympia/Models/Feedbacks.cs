using System.ComponentModel.DataAnnotations;
using System;

namespace API_olympia.Models
{
    public class Feedbacks
    {
        [Key]
        public int IdFeedback { get; set; }

        [Required]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(1000, ErrorMessage = "A descrição não deve ter menos do que 150 caracteres e mais do que 1000 caracteres.", MinimumLength = 150)]
        public string Descricao { get; set; }

        [Required]
        public string Categoria { get; set; }

        [Required]
        public string Foto { get; set; }
    }
}