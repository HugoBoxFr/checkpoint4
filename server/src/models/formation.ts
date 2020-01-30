export class Formation {
    id!: number;
    name!: string;
    school!: string;
    place!: string;
    date_debut!: string;
    date_fin!: string;
    description!: string;
    user_id!: number;

    constructor(input: Formation) {
        Object.assign(this, input);
    }
}
