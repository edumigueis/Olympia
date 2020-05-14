using System.ComponentModel.DataAnnotations;
using System;

namespace API_olympia.Models
{
    public class Eventos
    {
        [Key]
        public int IdEvento { get; set; }

        [Required]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "O Nome não deve ter menos do que 2 caracteres e mais do que 50 caracteres.", MinimumLength = 2)]
        public string Nome { get; set; }

        [Required]
        [StringLength(800, ErrorMessage = "A descrição não deve ter menos do que 300 caracteres e mais do que 800 caracteres.", MinimumLength = 300)]
        public string Descricao { get; set; }

        [Required]
        public int IdArte { get; set; }

        [DataType(DataType.Date)]
        [Required]
        public DateTime DataPost { get; set; }

        [DataType(DataType.Date)]
        [Required]
        public DateTime DataEvento { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "A localização não deve ter mais do que 100 caracteres.")]
        public string LocalizacaoCoord { get; set; }
    }
}