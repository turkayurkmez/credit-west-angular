export class Task{
    constructor(
        public id?: number,
        public name?: string,
        public expectedDate?: Date,
        public projectId?: number,
        public isDone?:boolean
    ){

    }
}