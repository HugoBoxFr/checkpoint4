import { FormationsRepository } from './../repository/formations.repository';
import { Formation } from 'src/models/formation';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class FormationsService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: FormationsService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new FormationsService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: FormationsRepository;
    private constructor() {
        this.repository = FormationsRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Formation[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Formation> {
        return this.repository.findById(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(formation: any): Promise<Formation> {
      return this.repository.insert(formation);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    update(formation: any): Promise<Formation> {
      return this.repository.update(formation);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
