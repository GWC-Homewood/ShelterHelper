using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Pets.Data
{
    public class PetsContext : DbContext
    {
        public PetsContext(DbContextOptions<PetsContext> options) :
            base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("Pets");


            base.OnModelCreating(modelBuilder);
        }
    }
}
