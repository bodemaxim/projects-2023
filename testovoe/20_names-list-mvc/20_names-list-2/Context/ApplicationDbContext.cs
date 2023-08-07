using Microsoft.EntityFrameworkCore;
using NamesList.Models;
using System; //было в образце, поэтому пока оставлю

namespace NamesList.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options)
            : base(options)
        {

        }

        public DbSet<Name> Names { get; set; }
    }
}
