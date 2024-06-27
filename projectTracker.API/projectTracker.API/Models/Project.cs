namespace projectTracker.API.Models
{
    public class Project
    {
        /*
         *  constructor(
        public id?:number,
        public name?:string,
        public description?: string,
        public categoryId?: number,
        public startDate?: Date,
        public completedPercentage?: number,
        public tasks?: Task[]

    ){}
         */

        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int? CategoryId { get; set; }
        public DateTime? StartDate { get; set; }
        public double? CompletedPercentage { get; set; }
        public List<Task>? Tasks { get; set; } 

    }
}
