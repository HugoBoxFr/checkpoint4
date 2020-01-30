export class Project {
    id!: number;
    name!: string;
    company!: string;
    date!: string;
    description!: string;
    url!: string;
    img!: string;
    user_id!: number;

    constructor(input: Project) {
        Object.assign(this, input);
    }
}

