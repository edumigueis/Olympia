using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Usuarios
    {
        [Key]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(40, ErrorMessage = "O Nome não deve ter menos do que 6 caracteres e mais do que 40 caracteres.", MinimumLength = 6)]
        public string Nome { get; set; }

        [Required]
        [StringLength(800, ErrorMessage = "A descrição não deve ter menos do que 300 caracteres e mais do que 800 caracteres.", MinimumLength = 300)]
        public string Descricao { get; set; }

        [Required]
        public int IdArte { get; set; }

        [DataType(DataType.Date)]
        [Required]
        public Date DataPost { get; set; }

        [DataType(DataType.Date)]
        [Required]
        public Date DataUsuario { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "A descrição não deve ter mais do que 100 caracteres.")]
        public string localizacaoCoord { get; set; }
    }
}