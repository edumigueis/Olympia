using System.Threading.Tasks;
using API_olympia.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using System.Data;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace API_olympia.Data
{
    public class Repository : IRepository
    {
        public OlympiaContext Context { get; }

        private readonly string stringConnection;
        public Repository(OlympiaContext context)
        {
            this.Context = context;
            stringConnection = "Data Source = regulus.cotuca.unicamp.br; Initial Catalog = BD19197; Persist Security Info = True; User ID = BD19197; Password= Glausilvinhamor10";
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

        public async Task<Admins[]> GetAllAdminsAsync()
        {
            IQueryable<Admins> consultaAdmins = this.Context.Admins;
            consultaAdmins = consultaAdmins.OrderBy(p => p.IdAdmin);
            return await consultaAdmins.ToArrayAsync();
        }

        public async Task<Admins> GetAllAdminsAsyncById(int id)
        {
            IQueryable<Admins> consultaAdmins = this.Context.Admins;
            consultaAdmins = consultaAdmins.OrderBy(p => p.IdAdmin)
            .Where(Admins => Admins.IdAdmin == id);
            return await consultaAdmins.FirstOrDefaultAsync();
        }

        /**************************Storeds Procedures*****************/

        public bool VerfificarSpAdmins(LoginViewModel model)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ValidateAdmin '" + model.UserName + "','" + model.Senha + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            int count = 0;
            while (leitor.Read())
            {
                count++;
            }
            conn.Close();

            if (count == 0)
                return false;
            else
                return true;
        }

        public List<string> SpFotosServico(int idServico)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_FotosServico '" + idServico + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<string>();

            while (leitor.Read())
            {
                result.Add(leitor["foto"].ToString());
            }
            conn.Close();

            return result;
        }

        public List<string> SpFotosObra(int idObra)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_FotosObra '" + idObra + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<string>();

            while (leitor.Read())
            {
                result.Add(leitor["foto"].ToString());
            }
            conn.Close();

            return result;
        }

        public List<string> SpFotosEvento(int idEvento)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_FotosEvento '" + idEvento + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<string>();

            while (leitor.Read())
            {
                result.Add(leitor["foto"].ToString());
            }
            conn.Close();

            return result;
        }

        public int SpUserObra(int idObra)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_UserObra '" + idObra + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            int result = 0;

            while (leitor.Read())
            {
                result = Convert.ToInt32(leitor["idUsuario"]);
            }
            conn.Close();

            return result;
        }

        public int SpUserServico(int idServico)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_UserObra '" + idServico + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            int result = 0;

            while (leitor.Read())
            {
                result = Convert.ToInt32(leitor["idUsuario"]);
            }
            conn.Close();

            return result;
        }

        public bool SpExisteUsername(string username)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ExisteUsername '" + username + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            int count = 0;

            while (leitor.Read())
            {
                count++;
            }
            conn.Close();

            if (count == 0)
                return false;
            else
                return true;
        }

        public List<object> SpAllObrasUser(int idUsuario)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_AllObrasUser '" + idUsuario + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = { leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"],
                                   leitor["dadosTecnicos"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpAllPublicacoesUser(int idUsuario)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_AllPublicacoesUser '" + idUsuario + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = { leitor["idUsuario"],
                                   leitor["texto"],
                                   leitor["tags"],
                                   leitor["foto"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpAllServicosUser(int idUsuario)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_AllServicosUser '" + idUsuario + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categoria"],
                                   leitor["tags"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpAllEventosArte(int idArte)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_AllEventosArte '" + idArte + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["dataPost"],
                                   leitor["dataEvento"],
                                   leitor["localizacaoCoord"],
                                   leitor["endereco"],
                                   leitor["horario"],
                                   leitor["linkSite"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<int> SpObrasCurtidas()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ObrasCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<int>();

            while (leitor.Read())
            {
                result.Add(Convert.ToInt32(leitor["idObra"]));
            }
            conn.Close();

            return result;
        }

        public List<int> SpPublicacoesCurtidas()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_PublicacoesCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<int>();

            while (leitor.Read())
            {
                result.Add(Convert.ToInt32(leitor["idPublicacao"]));
            }
            conn.Close();

            return result;
        }

        public List<int> SpServicosCurtidas()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ServicosCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<int>();

            while (leitor.Read())
            {
                result.Add(Convert.ToInt32(leitor["idServico"]));
            }
            conn.Close();

            return result;
        }

        public List<int> SpObrasCurtidasDesc()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ObrasCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<int>();

            while (leitor.Read())
            {
                result.Add(Convert.ToInt32(leitor["idObra"]));
            }
            conn.Close();

            result.Reverse();

            return result;
        }

        public List<int> SpPublicacoesCurtidasDesc()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_PublicacoesCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<int>();

            while (leitor.Read())
            {
                result.Add(Convert.ToInt32(leitor["idPublicacao"]));
            }
            conn.Close();

            result.Reverse();

            return result;
        }

        public List<int> SpServicosCurtidasDesc()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ServicosCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<int>();

            while (leitor.Read())
            {
                result.Add(Convert.ToInt32(leitor["idServico"]));
            }
            conn.Close();

            result.Reverse();

            return result;
        }

        public List<object> SpObrasNaoCurtidas()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ObrasNaoCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"],
                                   leitor["dadosTecnicos"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpPublicacoesNaoCurtidas()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_PublicacoesNaoCurtidas";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["texto"],
                                   leitor["tags"],
                                   leitor["foto"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpServicosNaoCurtidos()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ServicosNaoCurtidos";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpObrasOrderByData()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ObrasOrderByData";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"],
                                   leitor["dadosTecnicos"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpPublicacoesOrderByData()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_PublicacoesOrderByData";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["texto"],
                                   leitor["tags"],
                                   leitor["foto"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpServicosOrderByData()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ServicosOrderByData";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpObrasOrderByDataDesc()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ObrasOrderByData";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"],
                                   leitor["dadosTecnicos"]};

                result.Add(dados);
            }
            conn.Close();

            result.Reverse();

            return result;
        }

        public List<object> SpPublicacoesOrderByDataDesc()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_PublicacoesOrderByData";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["texto"],
                                   leitor["tags"],
                                   leitor["foto"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            result.Reverse();

            return result;
        }

        public List<object> SpServicosOrderByDataDesc()
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ServicosOrderByData";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["descricao"],
                                   leitor["idArte"],
                                   leitor["categorias"],
                                   leitor["tags"],
                                   leitor["dataPost"]};

                result.Add(dados);
            }
            conn.Close();

            result.Reverse();

            return result;
        }

        public int SpUserNameId(string username)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_UserNameId '" + username + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = 0;

            while (leitor.Read())
            {
                result = Convert.ToInt32(leitor["idUsuario"]);
            }
            conn.Close();

            return result;
        }

        public bool SpExisteCodigoObra(string codObra)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_ExisteCodigoObra '" + codObra + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            int count = 0;

            while (leitor.Read())
            {
                count++;
            }
            conn.Close();

            if (count == 0)
                return false;
            else
                return true;
        }

        public void SpMudarBio(string bio, string biografia, int idUsuario)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_MudarBio '" + bio + "','" + biografia + "'," + idUsuario;
            cmd.ExecuteReader();
            conn.Close();
        }

        public string SpVerificarDadosByUser(string username)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_VerificarDadosByUser '" + username.Replace("@", "") + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            string result = null;

            while (leitor.Read())
            {
                result = leitor["senha"].ToString();
            }

            conn.Close();

            return result;
        }

        public string SpVerificarDadosByEmail(string email)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_VerificarDadosByEmail '" + email + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            string result = null;

            while (leitor.Read())
            {
                result = leitor["senha"].ToString();
            }

            conn.Close();

            return result;
        }

        public List<object> SpUserByUsername(string username)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_UserByUsername '" + username.Replace("@", "") + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["userName"],
                                   leitor["email"],
                                   leitor["senha"],
                                   leitor["foto"],
                                   leitor["biografia"],
                                   leitor["bio"],
                                   leitor["configs"],
                                   leitor["seguindo"],
                                   leitor["seguidores"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public List<object> SpUserByEmail(string email)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_UserByEmail '" + email + "'";
            SqlDataReader leitor = cmd.ExecuteReader();

            var result = new List<object>();

            while (leitor.Read())
            {
                object[] dados = {leitor["idUsuario"],
                                   leitor["nome"],
                                   leitor["userName"],
                                   leitor["email"],
                                   leitor["senha"],
                                   leitor["foto"],
                                   leitor["biografia"],
                                   leitor["bio"],
                                   leitor["configs"],
                                   leitor["seguindo"],
                                   leitor["seguidores"]};

                result.Add(dados);
            }
            conn.Close();

            return result;
        }

        public string SpBiografiaByIdUser(int idUsuario)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_BiografiaByIdUser " + idUsuario;
            SqlDataReader leitor = cmd.ExecuteReader();

            string result = null;

            while (leitor.Read())
            {
                result = leitor["biografia"].ToString();
            }

            conn.Close();

            return result;
        }

        public string SpBioByIdUser(int idUsuario)
        {
            SqlConnection conn = new SqlConnection(stringConnection);
            conn.Open();
            SqlCommand cmd = new SqlCommand("comando", conn);
            cmd.CommandText = "sp_BioByIdUser " + idUsuario;
            SqlDataReader leitor = cmd.ExecuteReader();

            string result = null;

            while (leitor.Read())
            {
                result = leitor["bio"].ToString();
            }

            conn.Close();

            return result;
        }
    }
}