export interface User {
    username?: string;
    email: string;
    password: string;
}

export interface SearchableUser {
    id: number;
    username: string;
    date_created: Date;
}
