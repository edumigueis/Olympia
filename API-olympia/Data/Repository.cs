using System.Threading.Tasks;
using API_olympia.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API_olympia.Data
{
    public class Repository : IRepository
    {
        public OlympiaContext Context { get; }
        public Repository(OlympiaContext context)
        {
            this.Context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            //throw new System.NotImplementedException();
            this.Context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            //throw new System.NotImplementedException();
            this.Context.Remove(entity);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await this.Context.SaveChangesAsync() > 0);
        }

        public void Update<T>(T entity) where T : class
        {
            //throw new System.NotImplementedException();
            this.Context.Update(entity);
        }

        public async Task<Artes[]> GetAllArtesAsync()
        {
            IQueryable<Artes> consultaArtes = this.Context.Artes;
            consultaArtes = consultaArtes.OrderBy(a => a.IdArte);
            return await consultaArtes.ToArrayAsync();
        }

        public async Task<Artes> GetAllArtesAsyncById(int id)
        {
            IQueryable<Artes> consultaArtes = this.Context.Artes;
            consultaArtes = consultaArtes.OrderBy(a => a.IdArte)
            .Where(arte => arte.IdArte == id);
            return await consultaArtes.FirstOrDefaultAsync();
        }
    }
}