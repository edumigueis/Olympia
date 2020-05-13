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

        public async Task<Fotos[]> GetAllFotosAsync()
        {
            IQueryable<Fotos> consultaFotos = this.Context.Fotos;
            consultaFotos = consultaFotos.OrderBy(a => a.IdFoto);
            return await consultaFotos.ToArrayAsync();
        }

        public async Task<Fotos> GetAllFotosAsyncById(int id)
        {
            IQueryable<Fotos> consultaFotos = this.Context.Fotos;
            consultaFotos = consultaFotos.OrderBy(f => f.IdFoto)
            .Where(foto => foto.IdFoto == id);
            return await consultaFotos.FirstOrDefaultAsync();
        }

        public async Task<Usuarios[]> GetAllUsuariosAsync()
        {
            IQueryable<Usuarios> consultaUsuarios = this.Context.Usuarios;
            consultaUsuarios = consultaUsuarios.OrderBy(u => u.IdUsuario);
            return await consultaUsuarios.ToArrayAsync();
        }

        public async Task<Usuarios> GetAllUsuariosAsyncById(int id)
        {
            IQueryable<Usuarios> consultaUsuarios = this.Context.Usuarios;
            consultaUsuarios = consultaUsuarios.OrderBy(u => u.IdUsuario)
            .Where(usuario => usuario.IdUsuario == id);
            return await consultaUsuarios.FirstOrDefaultAsync();
        }

        public async Task<Eventos[]> GetAllEventosAsync()
        {
            IQueryable<Eventos> consultaEventos = this.Context.Eventos;
            consultaEventos = consultaEventos.OrderBy(e => e.IdEvento);
            return await consultaEventos.ToArrayAsync();
        }

        public async Task<Eventos> GetAllEventosAsyncById(int id)
        {
            IQueryable<Eventos> consultaEventos = this.Context.Eventos;
            consultaEventos = consultaEventos.OrderBy(e => e.IdEvento)
            .Where(evento => evento.IdEvento == id);
            return await consultaEventos.FirstOrDefaultAsync();
        }

        public async Task<Publicacoes[]> GetAllPublicacoesAsync()
        {
            IQueryable<Publicacoes> consultaPublicacoes = this.Context.Publicacoes;
            consultaPublicacoes = consultaPublicacoes.OrderBy(p => p.IdPublicacao);
            return await consultaPublicacoes.ToArrayAsync();
        }

        public async Task<Publicacoes> GetAllPublicacoesAsyncById(int id)
        {
            IQueryable<Publicacoes> consultaPublicacoes = this.Context.Publicacoes;
            consultaPublicacoes = consultaPublicacoes.OrderBy(p => p.IdPublicacao)
            .Where(publicacao => publicacao.IdPublicacao == id);
            return await consultaPublicacoes.FirstOrDefaultAsync();
        }
    }
}