namespace projectTracker.API.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime? ExpectedDate { get; set; }
        public int? ProjectId { get; set; }
        public bool? IsDone { get; set; }

    }
}
