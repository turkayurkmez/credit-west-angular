using projectTracker.API.Models;

namespace projectTracker.API.Services
{
    public interface IProjectService
    {
        public IEnumerable<Project> GetProjects();
        public IEnumerable<Project> GetProjectsByCategory(int categoryId);
        public int? CreateProject(Project project);


    }
}
