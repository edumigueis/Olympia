using System.ComponentModel.DataAnnotations;

namespace API_olympia.Data
{
    public class Configs
    {
        [Required]
        public int Menu { get; set; }

        [Required]
        public int Nome { get; set; }

        [Required]
        public int Foto { get; set; }

        [Required]
        public int Capa { get; set; }

        [Required]
        public int Dark { get; set; }

    }
}
