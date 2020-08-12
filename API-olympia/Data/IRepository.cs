using System.Collections.Generic;
using System.Threading.Tasks;
using API_olympia.Models;

namespace API_olympia.Data
{
    public interface IRepository
    {
        public string StringValueRole { get; set; }
        public int IntValue { get; set; }
        public string StringValueNome { get; set; }
        public string StringValueRoute { get; set; }

        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

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

        Task<Admins[]> GetAllAdminsAsync();
        Task<Admins> GetAllAdminsAsyncById(int idAdmin);

        /******************Storeds Procedures*****************/

        bool VerfificarSpAdmins(LoginViewModel model);
        List<string> SpFotosServico(int idServico);
        List<string> SpFotosObra(int idObra);
        List<string> SpFotosEvento(int idEvento);
        int SpUserObra(int idObra);
        int SpUserServico(int idServico);
        bool SpExisteUsername(string username);
        List<object> SpAllObrasUser(int idUsuario);
        List<object> SpAllPublicacoesUser(int idUsuario);
        List<object> SpAllServicosUser(int idUsuario);
        List<object> SpAllEventosArte(int idArte);
        List<int> SpObrasCurtidas();
        List<int> SpPublicacoesCurtidas();
        List<int> SpServicosCurtidas();
        List<int> SpObrasCurtidasDesc();
        List<int> SpPublicacoesCurtidasDesc();
        List<int> SpServicosCurtidasDesc();
        List<object> SpObrasNaoCurtidas();
        List<object> SpPublicacoesNaoCurtidas();
        List<object> SpServicosNaoCurtidos();
        List<object> SpObrasOrderByData();
        List<object> SpPublicacoesOrderByData();
        List<object> SpServicosOrderByData();
        List<object> SpObrasOrderByDataDesc();
        List<object> SpPublicacoesOrderByDataDesc();
        List<object> SpServicosOrderByDataDesc();
        int SpUserNameId(string username);
        bool SpExisteCodigoObra(string codObra);
        void SpMudarBio(string bio, string biografia, int idUsuario);
        string SpVerificarDadosByUser(string user);
        string SpVerificarDadosByEmail(string email);
        List<object> SpUserByUsername(string email);
        List<object> SpUserByEmail(string email);
        string SpBiografiaByIdUser(int idUsuario);
        string SpBioByIdUser(int idUsuario);
        void SpAlterConfig(string config, int idUsuario);
        List<object> SpSearchUser(string key);
        List<object> SpSearchObra(string key);
        List<object> SpSearchServico(string key);
        List<object> SpSearchPublicacao(string key);
    }
}