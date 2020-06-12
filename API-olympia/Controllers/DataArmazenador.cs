using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    public class DataArmazenador
    {
        private string jsonPublicacao;
        public string JsonPublicacao { get => jsonPublicacao; set => jsonPublicacao = value; }

        public DataArmazenador()
        {}
    }
}
