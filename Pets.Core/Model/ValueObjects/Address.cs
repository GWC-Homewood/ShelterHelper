using System;
using System.Collections.Generic;
using System.Text;

namespace Pets.ValueObjects
{
    public class Address
    {
        public string StreetAddress1 { get; private set; }
        public string StreetAddress2 { get; private set; }
        public string City { get; private set; }
        public string State { get; private set; }
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
