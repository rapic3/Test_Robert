//using System;
//using System.Linq;
//using System.Net.Http;
//using System.Net.Http.Headers;
//using System.Threading.Tasks;
//using System.Web;
//using Microsoft.AspNetCore.Http;
//using Newtonsoft.Json;

using Microsoft.AspNetCore.Mvc;
using Test_Robert.Model;
using System.Collections.Generic;

namespace Test_Robert.Controllers
{
    [Route("api/[controller]")]
    public class ProductoController : ControllerBase
    {
        [HttpGet("[action]")]
        public IEnumerable<Producto> GetProductos()
        {
            List<Producto> productos = new List<Producto>() { new Producto() { id = 1, name = "n", img = "i", best_seller= true } };

            //Lleno la lista
            //GetData();


            return productos;
        }

        private string GetData()
        {
            //using (var client = new HttpClient())
            //{
            //    // Establecer la url que proporciona acceso al servidor que publica la API 
            //    client.BaseAddress = new Uri("https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior/products");

            //    // Configurar encabezados para que la petición de realice en formato JSON
            //    client.DefaultRequestHeaders.Accept.Clear();
            //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            //    // Obtener el texto JSON con los datos del login
            //    string request = JsonConvert.SerializeObject(new
            //    {
            //    });

            //    // Realizar la petición GET
            //    HttpResponseMessage response = client.GetAsync("api/auth/login?JsonLoginRequest=" + HttpUtility.UrlEncode(request)).Result;

            //    if (response.IsSuccessStatusCode)
            //    {
            //        // Obtener el resultado como objeto dynamic 
            //        var result = response.Content.ReadAsAsync<dynamic>().Result;
            //        Console.WriteLine("ReturnCode: {0}", result.Returncode);
            //        Console.WriteLine("Message: {0}", result.Message);
            //        Console.WriteLine("Token: {0}", result.Token);
            //    }
            //}

            return "";
        }
    }
}
