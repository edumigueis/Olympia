using System.Threading.Tasks;
using API_olympia.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Data;



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

         public async Task<Obras[]> GetAllObrasAsync()
        {
            IQueryable<Obras> consultaObras = this.Context.Obras;
            consultaObras = consultaObras.OrderBy(p => p.IdObra);
            return await consultaObras.ToArrayAsync();
        }

        public async Task<Obras> GetAllObrasAsyncById(int id)
        {
            IQueryable<Obras> consultaObras = this.Context.Obras;
            consultaObras = consultaObras.OrderBy(p => p.IdObra)
            .Where(obra => obra.IdObra == id);
            return await consultaObras.FirstOrDefaultAsync();
        }

         public async Task<Curtidas[]> GetAllCurtidasAsync()
        {
            IQueryable<Curtidas> consultaCurtidas = this.Context.Curtidas;
            consultaCurtidas = consultaCurtidas.OrderBy(p => p.IdCurtida);
            return await consultaCurtidas.ToArrayAsync();
        }

        public async Task<Curtidas> GetAllCurtidasAsyncById(int id)
        {
            IQueryable<Curtidas> consultaCurtidas = this.Context.Curtidas;
            consultaCurtidas = consultaCurtidas.OrderBy(p => p.IdCurtida)
            .Where(curtida => curtida.IdCurtida == id);
            return await consultaCurtidas.FirstOrDefaultAsync();
        }

         public async Task<Servicos[]> GetAllServicosAsync()
        {
            IQueryable<Servicos> consultaServicos = this.Context.Servicos;
            consultaServicos = consultaServicos.OrderBy(p => p.IdServico);
            return await consultaServicos.ToArrayAsync();
        }

        public async Task<Servicos> GetAllServicosAsyncById(int id)
        {
            IQueryable<Servicos> consultaServicos = this.Context.Servicos;
            consultaServicos = consultaServicos.OrderBy(p => p.IdServico)
            .Where(servico => servico.IdServico == id);
            return await consultaServicos.FirstOrDefaultAsync();
        }

        public async Task<Sugestoes[]> GetAllSugestoesAsync()
        {
            IQueryable<Sugestoes> consultaSugestoes = this.Context.Sugestoes;
            consultaSugestoes = consultaSugestoes.OrderBy(p => p.IdSugestao);
            return await consultaSugestoes.ToArrayAsync();
        }

        public async Task<Sugestoes> GetAllSugestoesAsyncById(int id)
        {
            IQueryable<Sugestoes> consultaSugestoes = this.Context.Sugestoes;
            consultaSugestoes = consultaSugestoes.OrderBy(p => p.IdSugestao)
            .Where(sugestao => sugestao.IdSugestao == id);
            return await consultaSugestoes.FirstOrDefaultAsync();
        }

        public bool VerfificarSpAdmins(Admins model){
            var admins = Context.Admins.FromSqlRaw("sp_ValidateAdmin"+model.User+""+model.Password+"").ToList();
            if(admins.Count == 1){
                return true;
            }else{
                return false;
            }
        }
    }
}