using System.ComponentModel.DataAnnotations;
using System;

namespace API_olympia.Models
{
    public class Denuncias
    {
        [Key]
        public int IdDenuncia { get; set; }

        [Required]
        public int IdUsuario { get; set; }

        [Required]
        public string TipoDenuncia { get; set; }

        [Required]
        [StringLength(1000, ErrorMessage = "A descrição não deve ter menos do que 150 caracteres e mais do que 1000 caracteres.", MinimumLength = 150)]
        public string Descricao { get; set; }
    }
}