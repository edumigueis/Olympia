using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_olympia.Controllers
{
    class AttributeArgument : IAttributeArgument
    {
        private readonly Armazenador armazenador;
        public AttributeArgument(Armazenador armazenador)
        {
            this.armazenador = armazenador;
        }
        public Armazenador Armazenador { get { return armazenador; } }
    }
}
