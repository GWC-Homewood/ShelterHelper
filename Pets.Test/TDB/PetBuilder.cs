using System;
using System.Collections.Generic;
using System.Text;
using Pets.Aggregates;
using Pets.Entities;

namespace Pets.Test.TDB
{
    public class PetBuilder
    {

        Pet Pet { get; set; }

        public PetBuilder()
        {
            Pet = new Pet();
            Pet.BirthDate = DateTime.Now;
            Pet.Name = "Default";
            Pet.MicrochipNumber = "555555";     
        }

        public PetBuilder WithName (string Name)
        {
            this.Pet.Name = Name;
            return this;
        }

        public PetBuilder WithMicrochip(string microchip)
        {
            this.Pet.MicrochipNumber = microchip;
            return this;
        }

        public PetBuilder WithBirthDate(DateTime birthDate)
        {
            this.Pet.BirthDate = birthDate;
            return this;
        }

        public Pet Build()
        {
            return this.Pet;
        }

    }
}
