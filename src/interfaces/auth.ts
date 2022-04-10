import { IUser } from "./user";

export interface IAuthRequest {
    name?: string;
    email: string;
    password: string;
}

export interface IAuthResponse {
    message?: string;
    token: string;
    user: IUser;
}