export interface Letter {
    id?:number; // optional, we dont have id to creating a new letter
    toWhom:string;
    fromWhom:string;
    message:string;
    date:string;
}