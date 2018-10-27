using System;
using System.Collections.Generic;
using System.Text;
using Pets.Data;
using Pets.Aggregates;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Pets.Query
{
    public class FindPet
    {
        private readonly PetsContext _context;
        public FindPet(PetsContext context)
        {
            _context = context;
        }

        public Pet ByMicrochip(string microchip)
        {
            return _context.Pet
                .Where(p => p.MicrochipNumber == microchip)
                .SingleOrDefault();
        }
    }
}
