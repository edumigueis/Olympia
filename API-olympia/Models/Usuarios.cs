using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Usuarios
    {
        [Key]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(40, ErrorMessage = "O Nome não deve ter menos do que 5 caracteres e mais do que 40 caracteres.", MinimumLength = 5)]
        public string Nome { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "O user name não deve ter mais do que 30 caracteres.")]
        /*Regex: a-z 0-9 + _ + .*/
        public string UserName { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "O email não deve ter mais do que 255 caracteres.")]
        public string Email { get; set; }

        [Required]
        [StringLength(500, ErrorMessage = "A senha não pode ter mais de 500 caracteres.")]
        public string Senha { get; set; }

        [Required]
        public string Foto { get; set; }

        [Required]
        [StringLength(1200, ErrorMessage = "A biografia não pode ter mais de 1200 caracteres.")]
        public string Biografia { get; set; }

        [Required]
        [StringLength(50, ErrorMessage = "A bio não pode ter mais de 50 caracteres.")]
        public string Bio { get; set; }

        [Required]
        [StringLength(49, ErrorMessage = "As configurações não podem ter mais de 49 caracteres.")]
        public string Configs { get; set; }

        [Required]
        public string Seguindo { get; set; }

        [Required]
        public string Seguidores { get; set; }
    }
}