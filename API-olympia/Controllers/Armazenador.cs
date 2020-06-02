using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    public class Armazenador
    {
        private string stringValueRole;
        private int intValue;
        private string stringValueNome;
        private string stringValueRoute;
        public string StringValueRole { get => stringValueRole; set => stringValueRole = value; }
        public int IntValue { get => intValue; set => intValue = value; }
        public string StringValueNome { get => stringValueNome; set => stringValueNome = value; }
        public string StringValueRoute { get => stringValueRoute; set => stringValueRoute = value; }

        public Armazenador()
        { }

    }
}
