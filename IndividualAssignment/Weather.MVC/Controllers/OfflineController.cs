using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Weather.MVC.Controllers
{
    [OutputCache(Duration = 0)]
    public class OfflineController : Controller
    {
        // GET: Manifest
        public ActionResult Manifest()
        {
            Response.ContentType = "text/cache-manifest";
            Response.ContentEncoding = Encoding.UTF8;

            return View();
        }
    }
}