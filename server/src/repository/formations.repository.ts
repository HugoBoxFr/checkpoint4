import { Formation } from './../models/formation';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class FormationsRepository {

    private static instance: FormationsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'formation';

    static getInstance() {
        if (!this.instance) {
            this.instance = new FormationsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all Users and return it in a promise.
     */
    findAll(): Promise<Formation[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((formation: any) => new Formation(formation));
          });
    }

    /**
     * Make a query to the database to retrieve one User by its id in parameter. 
     * Return the User found in a promise.
     * @param id User id
     */
    findById(id: number): Promise<Formation> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Formation(results[0]));
    }


    /**
     * Make a query to the database to insert a new User and return the created User in a promise.
     * @param User User to create
     */
    insert(formation: Formation) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, school, place, date_debut, date_fin, description, user_id) VALUES (?,?,?,?,?,?,?)`,
        [formation.name, formation.school, formation.place, formation.date_debut, formation.date_fin, formation.description, formation.user_id]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing User and return the updated User in a promise.
     * @param User User to update
     */
    update(formation: Formation) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, school = ?, place = ?, date_debut = ?, date_fin = ?, description = ?, user_id = ? WHERE id = ?`,
        [formation.name, formation.school, formation.place, formation.date_debut, formation.date_fin, formation.description, formation.user_id]
      ).then(() => {
        return this.findById(formation.id);
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
