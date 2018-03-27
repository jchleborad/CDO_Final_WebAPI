using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CreateDesignOrganize2.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CreateDesignOrganize2.API
{
    [Route("api/[controller]")]
    public class PagesController : Controller
    {
        private UserContext _db;
        public PagesController(UserContext db)
        {
            _db = db;
        }
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var pages = _db.Pages.ToList();
            return Ok(pages);
        }

        // GET: api/<controller>/getPagesByCategory/category
        [HttpGet("getPagesByCategory/{category}")]
        public IActionResult GetPagesByCategory(string category)
        {
            var pages = _db.Pages.Where(p => p.Category == category).ToList();
            return Ok(pages);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
