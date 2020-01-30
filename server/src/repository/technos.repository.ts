import { Techno } from './../models/techno';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class TechnosRepository {

    private static instance: TechnosRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'techno';

    static getInstance() {
        if (!this.instance) {
            this.instance = new TechnosRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all Users and return it in a promise.
     */
    findAll(): Promise<Techno[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((techno: any) => new Techno(techno));
          });
    }

    /**
     * Make a query to the database to retrieve one User by its id in parameter. 
     * Return the User found in a promise.
     * @param id User id
     */
    findById(id: number): Promise<Techno> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Techno(results[0]));
    }


    /**
     * Make a query to the database to insert a new User and return the created User in a promise.
     * @param User User to create
     */
    insert(techno: Techno) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, url, user_id) VALUES (?,?,?)`,
        [techno.name, techno.url, techno.user_id]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing User and return the updated User in a promise.
     * @param User User to update
     */
    update(techno: Techno) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, url = ?, user_id = ? WHERE id = ?`,
        [techno.name, techno.url, techno.user_id]
      ).then(() => {
        return this.findById(techno.id);
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
