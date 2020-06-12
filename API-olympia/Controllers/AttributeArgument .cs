using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace API_olympia.Controllers
{
    [ApiController]
    class AttributeArgument : IAttributeArgument
    {
        private readonly Armazenador armazenador;
        public AttributeArgument()
        {
            armazenador = ArmazenadorDeArmazenadores.getArmazenador("dskamrdsdm34534546rofsifdfdgdfgtbrtdfg");
        }

        public Armazenador Armazenador => armazenador;
    }
}
