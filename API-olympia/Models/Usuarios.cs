using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Usuarios
    {
        [Key]
        public int IdUsuario { get; set; }

        [Required]
        [StringLength(40, ErrorMessage = "O Nome não deve ter menos do que 5 caracteres e mais do que 40 caracteres.", MinimumLength = 3)]
        [RegularExpression("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", ErrorMessage = "Nome deve ter ao menos um espaço e só pode conter caracteres do tipo letra.")]
        public string Nome { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "O user name não deve ter mais do que 30 caracteres.")]
        /*[RegularExpression("/^[a-z0-9_-]{1,30}$/igm", ErrorMessage = "Username nao pode começar ou terminar com . e _ , e eles não podem vir um seguido do outro.Só pode conter letras,ponto e _ ")]*/
        public string UserName { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "O email não deve ter mais do que 255 caracteres.")]
        /*[RegularExpression(@"\A(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z",ErrorMessage = "Endereço de email deve conter ao menos um @ e um ponto.")]*/
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
        [StringLength(130, ErrorMessage = "A bio não pode ter mais de 130 caracteres.")]
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