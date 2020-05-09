using System.ComponentModel.DataAnnotations;

namespace API_olympia.Models
{
    public class Artes
    {
        [Key]
        public int IdArte { get; set; }
        public string Nome { get; set; }
    }
}