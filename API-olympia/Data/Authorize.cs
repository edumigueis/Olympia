using System.Collections.Generic;

namespace API_olympia.Data
{
    public class Authorize
    {
        private int indiceRoute = 0;
        private int indiceRole = 0;

        public Authorize(string codigoAcesso) 
        {

            for (int i = 0; i < Armazenadora.StringValueRoute.Count; i++)
            {
                var list = Armazenadora.StringValueRoute[i];
                if (list[0] == codigoAcesso)
                {
                    indiceRoute = i;
                    break;
                }
            }

            for (int i = 0; i < Armazenadora.StringValueRoute.Count; i++)
            {
                var list = Armazenadora.StringValueRole[i];
                if (list[0] == codigoAcesso)
                {
                    indiceRole = i;
                    break;
                }
            }
        }

        public bool OnAuthorization()
        {

            if (Armazenadora.StringValueRoute.Count > 0)
            {
                var list2 = Armazenadora.StringValueRoute[indiceRoute];

                if (list2[1] != null)
                {
                    if (list2[1].Equals("olympia.art.br") ||
                        list2[1].Equals("http://localhost:8080/"))
                    {
                        list2[1] = null;
                        return true;
                    }

                    list2[1] = null;
                }
            }

            if (Armazenadora.StringValueRole.Count > 0)
            {
                var list = Armazenadora.StringValueRole[indiceRole];

                if (list[1] != null)
                {
                    if (list[1].Equals("Admin"))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }

            return false;
        }

    }


}











