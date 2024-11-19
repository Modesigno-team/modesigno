export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dob?: Date;
    role: string;
    country?: string;
    profilePicture?: string;
}


export interface ILoginUser extends IUser {
    access_token: string;
}