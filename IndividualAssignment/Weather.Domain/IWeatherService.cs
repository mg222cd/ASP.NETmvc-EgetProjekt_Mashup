using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Weather.Domain
{
    public interface IWeatherService : IDisposable
    {
        Geoname GetGeoname(Geoname geo);
        Geoname RefreshForecasts(Geoname geoname);
    }
}
