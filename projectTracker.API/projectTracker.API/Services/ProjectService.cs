using projectTracker.API.Models;

namespace projectTracker.API.Services
{
    public class ProjectService : IProjectService
    {
        private List<Project> projects = new List<Project>()
        {
             new(){
                 Id=1,
                 Name="Kıbrıs Yemek Sepeti",
                 Description="Kıbrıs genelinde yemek sipariş uygulaması",
                 CategoryId=1, CompletedPercentage=0.15, StartDate=new DateTime(2024,4,23),
                 Tasks=new List<Models.Task>{
                      new Models.Task{
                          Id=1, Name="UI oluştur", IsDone=false, ProjectId=1, ExpectedDate=new DateTime(2024,7,1),


                   },
                      new Models.Task{
                          Id=2, Name="Clean arch alt yapısı", IsDone=true, ProjectId=1, ExpectedDate=new DateTime(2024,10,15)
                      },
                       new Models.Task{
                          Id=3, Name="Angular componentleri geliştir", IsDone=true, ProjectId=1, ExpectedDate=new DateTime(2024,10,15)
                      }

             } },

              new(){
                 Id=2,
                 Name="Kıbrıs Getir Projesi",
                 Description="Kıbrıs genelinde market alışveriş uygulaması",
                 CategoryId=1, CompletedPercentage=0.25, StartDate=new DateTime(2024,5,19),
                 Tasks=new List<Models.Task>{
                      new Models.Task{
                          Id=4, Name="Db oluştur", IsDone=true, ProjectId=2, ExpectedDate=new DateTime(2024,6,1),
                   },
                      new Models.Task{
                          Id=5, Name="REST altyapısını oluştur", IsDone=false, ProjectId=2, ExpectedDate=new DateTime(2024,10,15)
                      },
                       new Models.Task{
                          Id=6, Name="Angular componentleri geliştir", IsDone=true, ProjectId=2, ExpectedDate=new DateTime(2024,10,15)
                      }


             } },

                new(){
                 Id=3,
                 Name="Tower Defence oyunu",
                 Description="Öğretici bir strateji oyunu",
                 CategoryId=2, CompletedPercentage=0.10, StartDate=new DateTime(2024,6,1),
                 Tasks=new List<Models.Task>{
                      new Models.Task{
                          Id=7, Name="Oyun senaryosunu kur", IsDone=false, ProjectId=3, ExpectedDate=new DateTime(2024,6,1),
                   },
                      new Models.Task{
                          Id=8, Name="Assesment'ları belirle", IsDone=false, ProjectId=2, ExpectedDate=new DateTime(2024,10,15)
                      },
                       new Models.Task{
                          Id=9, Name="Oyun dinamiğini tasarla", IsDone=true, ProjectId=2, ExpectedDate=new DateTime(2024,10,15)
                      },
                          new Models.Task{
                          Id=10, Name="Level Design'i oluştur", IsDone=true, ProjectId=2, ExpectedDate=new DateTime(2024,10,15)
                      }


             } },

                  new(){
                 Id=4,
                 Name="Yangın Öngörü YZ uygulaması",
                 Description="Dünya genelinde yangın önleme",
                 CategoryId=3, CompletedPercentage=0.25, StartDate=new DateTime(2024,5,19),
                 Tasks=new List<Models.Task>{
                      new Models.Task{
                          Id=4, Name="Big Data Structure", IsDone=true, ProjectId=4, ExpectedDate=new DateTime(2024,6,1),
                   },
                      new Models.Task{
                          Id=5, Name="Veri setini temizle", IsDone=false, ProjectId=4, ExpectedDate=new DateTime(2024,10,15)
                      },
                       new Models.Task{
                          Id=6, Name="Machine Learning yapısını tasarla", IsDone=true, ProjectId=4, ExpectedDate=new DateTime(2024,10,15)
                      }


             } }


        };

        public int? CreateProject(Project project)
        {
            projects.Add(project);
            project.Id = projects.Last().Id + 1;
            return project.Id;
        }

        public IEnumerable<Project> GetProjectsByCategory(int categoryId)
        {
            return projects.Where(p => p.CategoryId == categoryId);
        }

        public IEnumerable<Project> GetProjects()
        {
            return projects;
        }
    }
}
