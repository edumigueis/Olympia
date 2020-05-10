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
    }
}