export class Techno {
    id!: number;
    name!: string;
    url!: string;
    user_id!: number;

    constructor(input: Techno) {
        Object.assign(this, input);
    }
}
