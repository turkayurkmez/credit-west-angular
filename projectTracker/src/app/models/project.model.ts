import { Task } from "./task.model";

export class Project
{
    constructor(
        public id?:number,
        public name?:string,
        public description?: string,
        public categoryId?: number,
        public startDate?: Date,
        public completedPercentage?: number,
        public tasks?: Task[]

    ){}

    //durum, açıklama, süre, başlangıç, tamamlanma yüzdesi, görevler
}