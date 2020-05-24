using System.Threading.Tasks;
using API_olympia.Models;

namespace API_olympia.Data
{
    public interface IRepository
    {
        // Métodos genéricos
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        // Métodos GET
        Task<Artes[]> GetAllArtesAsync();
        Task<Artes> GetAllArtesAsyncById(int ArtesId);

        Task<Fotos[]> GetAllFotosAsync();
        Task<Fotos> GetAllFotosAsyncById(int idFoto);

        Task<Usuarios[]> GetAllUsuariosAsync();
        Task<Usuarios> GetAllUsuariosAsyncById(int idUsuario);

        Task<Eventos[]> GetAllEventosAsync();
        Task<Eventos> GetAllEventosAsyncById(int idEvento);

        Task<Publicacoes[]> GetAllPublicacoesAsync();
        Task<Publicacoes> GetAllPublicacoesAsyncById(int idPublicacao);

        Task<Obras[]> GetAllObrasAsync();
        Task<Obras> GetAllObrasAsyncById(int idObra);

        Task<Curtidas[]> GetAllCurtidasAsync();
        Task<Curtidas> GetAllCurtidasAsyncById(int idCurtida);

        Task<Servicos[]> GetAllServicosAsync();
        Task<Servicos> GetAllServicosAsyncById(int idServico);

        Task<Sugestoes[]> GetAllSugestoesAsync();
        Task<Sugestoes> GetAllSugestoesAsyncById(int idSugestao);

    }
}