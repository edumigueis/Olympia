using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Publicacoes
    {
        [Key]
        public int IdPublicacao { get; set; }

        [Required]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(200, ErrorMessage = "O texto da publicação não deve ter mais do que 200 caracteres.")]
        public string Texto { get; set; }

        [StringLength(150, ErrorMessage = "As tags não devem ter mais de 150 caracteres.")]
        public string Tags { get; set; }

        [Required]
        public HttpPostedFileBase Foto { get; set; }

        [DataType(DataType.Date)]
        [Required]
        public Date DataPost { get; set; }
    }
}