export interface Task {
    id?: number; //Cuando creamos una task, hasta que esta no se guarde el id podria no venir
    text: string;
    day: string;
    reminder: boolean;
}