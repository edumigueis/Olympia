using System.ComponentModel.DataAnnotations;
using System;

namespace API_olympia.Models
{
    public class Biografias
    {
        [Required]
        [StringLength(1200, ErrorMessage = "A biografia não pode ter mais de 1200 caracteres.")]
        public string Biografia { get; set; }

        [Required]
        [StringLength(130, ErrorMessage = "A bio não pode ter mais de 130 caracteres.")]
        public string Bio { get; set; }
       
        public int IdUsuario { get; set; }
    }
}