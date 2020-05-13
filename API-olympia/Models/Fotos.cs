using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Fotos
    {
        [Key]
        public int IdFoto { get; set; }

        [Required]
        public string Foto { get; set; }

        public int IdObra { get; set; }

        public int IdServico { get; set; }

        public int IdEvento { get; set; }
    }
}