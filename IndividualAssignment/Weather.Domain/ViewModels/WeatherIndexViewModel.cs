﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather.Domain.ViewModels
{
    public class WeatherIndexViewModel
    {
        [DisplayName("Plats:")]
        [Required]
        [StringLength(100)]
        public string Geoname { get; set; }

        public bool HasGeonames
        {
            get { return Geonames != null && Geonames.Any(); }
        }

        public string City
        {
            get
            {
                return HasGeonames ? Geonames.First().name : "[Unknown]";
            }
        }

        public IEnumerable<Geoname> Geonames { get; set; }
    }
}
