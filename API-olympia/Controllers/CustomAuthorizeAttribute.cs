using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace API_olympia.Data
{
    [AttributeUsage(AttributeTargets.All)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterArmazenador filterArmazenador)
        {
            if (Armazenador.StringValueRoute != null)
            {

                if (Armazenador.StringValueRoute.Equals("olympia.art.br") ||
                    Armazenador.StringValueRoute.Equals("http://localhost:8080/"))
                {
                    Armazenador.StringValueRoute = null;
                    return;
                }

                Armazenador.StringValueRoute = null;
            }

            if (Armazenador.StringValueRole != null)
            {
                if (Armazenador.StringValueRole.Equals("Admin"))
                {
                    return;
                }
                else
                {
                    filterArmazenador.Result = new RedirectResult("/Home/Login");
                }
            }
            else
            {
                filterArmazenador.Result = new RedirectResult("/Home/Login");
            }
        }
    }
}

