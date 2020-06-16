using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_olympia.Data
{
    public class Configs
    {
        [Newtonsoft.Json.JsonProperty("menu")]
        public int Menu { get; set; }

        [Newtonsoft.Json.JsonProperty("deslig")]
        public int Nome { get; set; }

        [Newtonsoft.Json.JsonProperty("login")]
        public int Foto { get; set; }

        [Newtonsoft.Json.JsonProperty("capa")]
        public int Capa { get; set; }

        [Newtonsoft.Json.JsonProperty("dark")]
        public int Dark { get; set; }

    }
}
