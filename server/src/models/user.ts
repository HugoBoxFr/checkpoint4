export class User {
    id!: number;
    firstname!: string;
    lastname!: string;
    age!: number;
    title!: string;
    specialty!: string;
    description!: string;
    city!: string;
    phone!: string;
    mail!: string;
    git!: string;
    avatar!: string;

    constructor(input: User) {
        Object.assign(this, input);
    }
}

