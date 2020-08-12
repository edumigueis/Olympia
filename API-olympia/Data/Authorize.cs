namespace API_olympia.Data
{
    public class Authorize
    {
        public IRepository Armazenador { get; set; }

        public Authorize(IRepository armazenador) 
        {
            Armazenador = armazenador;
        }

        public bool OnAuthorization()
        {

            if (Armazenador.StringValueRoute != null)
            {
                if (Armazenador.StringValueRoute.Equals("olympia.art.br") ||
                    Armazenador.StringValueRoute.Equals("http://localhost:8080/"))
                {
                    Armazenador.StringValueRoute = null;
                    return true;
                }

                Armazenador.StringValueRoute = null;
            }


            if (Armazenador.StringValueRole != null)
            {
                if (Armazenador.StringValueRole.Equals("Admin"))
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

    }


}











