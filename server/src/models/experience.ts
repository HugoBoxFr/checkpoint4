export class Experience {
    id!: number;
    name!: string;
    company!: string;
    place!: string;
    date_debut!: string;
    date_fin!: string;
    description!: string;
    user_id!: number;

    constructor(input: Experience) {
        Object.assign(this, input);
    }
}

