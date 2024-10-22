using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using API_olympia.Models;
using Microsoft.AspNetCore.Http;

namespace API_olympia.Data
{
    public class OlympiaContext : IdentityDbContext<IdentityUser,IdentityRole, string>
    {
        public OlympiaContext(DbContextOptions<OlympiaContext> options) : base(options)
        {}

        public DbSet<Artes> Artes { get; set; }
        public DbSet<Fotos> Fotos { get; set; }
        public DbSet<Eventos> Eventos { get; set; }
        public DbSet<Publicacoes> Publicacoes { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Servicos> Servicos { get; set; }
        public DbSet<Obras> Obras { get; set; }
        public DbSet<Curtidas> Curtidas { get; set; }
        public DbSet<Feedbacks> FeedBacks { get; set; }
        public DbSet<Sugestoes> Sugestoes { get; set; }
        public DbSet<Denuncias> Denuncias { get; set; }
    }
}
