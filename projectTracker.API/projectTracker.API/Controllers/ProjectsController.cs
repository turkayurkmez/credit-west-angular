using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using projectTracker.API.Models;
using projectTracker.API.Services;

namespace projectTracker.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService projectService;

        public ProjectsController(IProjectService projectService)
        {
            this.projectService = projectService;
        }

        [HttpGet]
        public IActionResult GetProjects()
        {
            var projects = projectService.GetProjects();
            return Ok(projects);
        }
        [HttpGet("{categoryId}")]
        public IActionResult GetProjectByCategory(int categoryId)
        {
            var projects = projectService.GetProjectsByCategory(categoryId);
            return Ok(projects);
        }
        [HttpPost]
        public IActionResult Create(Project project)
        {
            if (ModelState.IsValid)
            {
                projectService.CreateProject(project);
                return CreatedAtAction("http://testUrl.com", value: project);
            }

            return BadRequest();
        }
    }
}
