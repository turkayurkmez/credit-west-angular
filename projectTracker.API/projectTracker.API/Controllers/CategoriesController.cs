using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using projectTracker.API.Models;

namespace projectTracker.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCategories()
        {
            var categories = new List<Category>
            {
                new Category { Id = 1, Name ="Marketing"},
                new Category { Id = 2, Name ="Oyun"},
                new Category { Id = 3, Name ="Yapay Zeka"},


            };

            return Ok(categories);
        }
    }
}
