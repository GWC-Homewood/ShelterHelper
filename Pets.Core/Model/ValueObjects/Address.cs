using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore;


namespace Pets.ValueObjects
{
    [Owned]
    public class Address
    {
        [MaxLength(50)]
        public string StreetAddress1 { get; private set; }
        [MaxLength(50)]
        public string StreetAddress2 { get; private set; }
        [MaxLength(50)]
        public string City { get; private set; }
        [MaxLength(2)]
        public string State { get; private set; }
        [MaxLength(10)]
        public string Zip { get; private set; }

        public Address(string streetAddress1, string streetAddress2, string city, string state, string zip)
        {
            StreetAddress1 = streetAddress1;
            StreetAddress2 = streetAddress2;
            City = city;
            State = state;
            Zip = zip;
        }
    }
}
