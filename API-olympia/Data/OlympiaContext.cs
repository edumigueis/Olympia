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
    }
}
