import { Langue } from './../models/langue';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class LanguesRepository {

    private static instance: LanguesRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'langue';

    static getInstance() {
        if (!this.instance) {
            this.instance = new LanguesRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all Users and return it in a promise.
     */
    findAll(): Promise<Langue[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((user: any) => new Langue(user));
          });
    }

    /**
     * Make a query to the database to retrieve one User by its id in parameter. 
     * Return the User found in a promise.
     * @param id User id
     */
    findById(id: number): Promise<Langue> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Langue(results[0]));
    }


    /**
     * Make a query to the database to insert a new User and return the created User in a promise.
     * @param User User to create
     */
    insert(langue: Langue) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, url, description, user_id) VALUES (?,?,?,?)`,
        [langue.name, langue.url, langue.description, langue.user_id]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing User and return the updated User in a promise.
     * @param User User to update
     */
    update(langue: Langue) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, url = ?, description = ?, user_id = ? WHERE id = ?`,
        [langue.name, langue.url, langue.description, langue.user_id]
      ).then(() => {
        return this.findById(langue.id);
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
