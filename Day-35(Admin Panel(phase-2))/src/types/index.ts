export type User={
    id:number;
    name:string;
    email:string;
    role:"admin" | "user" | "manager";
};

export type Product={
     id:number;
    name:string;
    email:string;
    role:"active" | "inactive";
};