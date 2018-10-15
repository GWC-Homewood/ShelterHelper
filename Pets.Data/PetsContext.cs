using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Pets.Aggregates;
using Pets.Entities;

namespace Pets.Data
{
    public class PetsContext : DbContext
    {
        public PetsContext(DbContextOptions<PetsContext> options) :
            base(options)
        { }

        public DbSet<Pet> Pet { get; set; }
        public DbSet<Parent> Parent { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("Pets");

            modelBuilder.Entity<Pet>().HasKey(p => p.ID);
            modelBuilder.Entity<Pet>().Property(p => p.Name).HasMaxLength(75);
            modelBuilder.Entity<Pet>().Property(p => p.MicrochipNumber).HasMaxLength(150);

            modelBuilder.Entity<Parent>().HasKey(p => p.ID);

            base.OnModelCreating(modelBuilder);
        }
    }
}
