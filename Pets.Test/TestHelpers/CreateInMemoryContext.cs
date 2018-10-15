using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Pets.Data;

namespace Pets.Test.TestHelpers
{
   public static class CreateInMemoryContext
    {
        public static PetsContext Create()
        {
            PetsContext _context;
            DbContextOptions<PetsContext> options;

            options = new DbContextOptionsBuilder<PetsContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            _context = new PetsContext(options);
            return _context;
        }
    }
}
