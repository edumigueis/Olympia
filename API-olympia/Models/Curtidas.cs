using System.ComponentModel.DataAnnotations;
using System;

namespace API_olympia.Models
{
    public class Curtidas
    {
        [Key]
        public int IdEvento { get; set; }

        [Required]
        public int IdUsuario { get; set; }
        
        public int idObra  { get; set; }

        public int idServico  { get; set; }

        public int idPublicacao  { get; set; }

        public int idEvento   { get; set; }

        
    }
}