export class Langue {
    id!: number;
    name!: string;
    url!: string;
    description!: string;
    user_id!: number;

    constructor(input: Langue) {
        Object.assign(this, input);
    }
}

