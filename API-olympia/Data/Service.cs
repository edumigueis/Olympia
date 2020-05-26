using System;

namespace API_olympia.Data
{
    public class Service : IServiceProvider
    {
        public Service() { }
        public object GetService(Type serviceType)
        {
            throw new NotImplementedException();
        }
    }
}