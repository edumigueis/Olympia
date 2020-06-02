using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    public static class Armazenador
    {
        private static string stringValueRole;
        private static int intValue;
        private static string stringValueNome;
        private static string stringValueRoute;
        public static string StringValueRole { get => stringValueRole; set => stringValueRole = value; }
        public static int IntValue { get => intValue; set => intValue = value; }
        public static string StringValueNome { get => stringValueNome; set => stringValueNome = value; }
        public static string StringValueRoute { get => stringValueRoute; set => stringValueRoute = value; }

    }
}
