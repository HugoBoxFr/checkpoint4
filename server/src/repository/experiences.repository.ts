import { Experience } from './../models/experience';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class ExperiencesRepository {

    private static instance: ExperiencesRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'experience';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ExperiencesRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all Users and return it in a promise.
     */
    findAll(): Promise<Experience[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((experience: any) => new Experience(experience));
          });
    }

    /**
     * Make a query to the database to retrieve one User by its id in parameter. 
     * Return the User found in a promise.
     * @param id User id
     */
    findById(id: number): Promise<Experience> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Experience(results[0]));
    }


    /**
     * Make a query to the database to insert a new User and return the created User in a promise.
     * @param User User to create
     */
    insert(experience: Experience) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, company, place, date_debut, date_fin, description, user_id) VALUES (?,?,?,?,?,?)`,
        [experience.name, experience.company, experience.place, experience.date_debut, experience. date_fin, experience.description, experience.user_id]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing User and return the updated User in a promise.
     * @param User User to update
     */
    update(experience: Experience) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, company = ?, place= ?, date_debut = ?, date_fin = ?, description = ?, user_id = ? WHERE id = ?`,
        [experience.name, experience.company, experience.place, experience.date_debut, experience. date_fin, experience.description, experience.user_id]
      ).then(() => {
        return this.findById(experience.id);
      });
    }

    /**
     * Make a query to the database to delete an existing User and return an empry promise
     * @param id User id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
