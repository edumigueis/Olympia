using Microsoft.EntityFrameworkCore;
using API_olympia.Models;

namespace API_olympia.Data
{
    public class OlympiaContext : DbContext
    {
        public OlympiaContext(DbContextOptions<OlympiaContext> options) : base(options)
        {
        }
        public DbSet<Artes> Artes { get; set; }
        public DbSet<Fotos> Fotos { get; set; }
        public DbSet<Eventos> Eventos { get; set; }
        public DbSet<Publicacoes> Publicacoes { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
    }
}
