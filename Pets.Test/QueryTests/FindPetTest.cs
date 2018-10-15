using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;
using Pets.Data;
using Pets.Aggregates;
using Pets.Test.TestHelpers;
using Pets.Query;

namespace Pets.Test.QueryTests
{
    [TestClass]
    public class FindPetTest
    {
        [TestClass]
        public class ByMicrochip
        {
            PetsContext _context = CreateInMemoryContext.Create();

            [TestMethod]
            public void ReturnsPetWithMatchingMicrochip()
            {
                var Pet1 = new TDB.PetBuilder().WithMicrochip("1234").Build();
                var Pet2 = new TDB.PetBuilder().WithMicrochip("5678").Build();
                _context.Pet.Add(Pet1);
                _context.Pet.Add(Pet2);
                _context.SaveChanges();

                FindPet findPet = new FindPet(_context);
                Assert.AreEqual(Pet2.ID, findPet.ByMicrochip(Pet2.MicrochipNumber).ID);
            }

        }
    }
}
