import { TechnosRepository } from '../repository/technos.repository';
import { Techno } from 'src/models/techno';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class TechnosService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: TechnosService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new TechnosService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: TechnosRepository;
    private constructor() {
        this.repository = TechnosRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Techno[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Techno> {
        return this.repository.findById(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(techno: any): Promise<Techno> {
      return this.repository.insert(techno);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    update(techno: any): Promise<Techno> {
      return this.repository.update(techno);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
