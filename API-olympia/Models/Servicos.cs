using System.ComponentModel.DataAnnotations;
using System;

namespace API_olympia.Models
{
    public class Servicos
    {
        [Key]
        public int IdServico { get; set; }

        [Required]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "O Nome não deve ter menos do que 2 caracteres e mais do que 50 caracteres.", MinimumLength = 2)]
        public string Nome { get; set; }

        [Required]
        [StringLength(800, ErrorMessage = "A descrição não deve ter menos do que 300 caracteres e mais do que 800 caracteres.", MinimumLength = 100)]
        public string Descricao { get; set; }

        [Required]
        public int IdArte { get; set; }

        [Required]
        [StringLength(20, ErrorMessage = "Deve ter pelo menos 1 categoria e no máximo 5", MinimumLength = 2)]
        public string Categorias { get; set; }

        [StringLength(150, ErrorMessage = "Tags devem ter no máximo 150 caracteres")]
        public string Tags { get; set; }


        [DataType(DataType.Date)]
        [Required]
        public DateTime DataPost { get; set; }

    }
}