using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    public static class GeradorDeCodigo
    {
        public static string alfanumericoAleatorio(int tamanho)
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, tamanho)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result;
        }
    }
}
