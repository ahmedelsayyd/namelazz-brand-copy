import { Role } from "./role.model";

export interface User {
    id: string;
    name: string,
    surname?: string
    dayOfBirth?:Date
    email: string,
    password?: string,
    tele?:number
    size?:string
    role: Role
    token?: string
}