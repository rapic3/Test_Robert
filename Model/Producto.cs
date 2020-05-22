using System.Collections.Generic;


namespace Test_Robert.Model
{
    /// <summary>
    /// Clase Producto
    /// </summary>
    /// <author>
    /// www.robertpineda.com
    /// </author>
    /// <remarks>
    /// Fecha 5/21/2020
    /// </remarks>
    public class Producto
    {
        public int id { get; set; }
        public string name { get; set; }
        public string price { get; set; }
        public bool available { get; set; }
        public bool best_seller { get; set; }
        public IList<int> categories { get; set; }
        public string img { get; set; }
        public string description { get; set; }

    }
}
