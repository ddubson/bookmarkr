import {Pool} from "pg";
import Book from "./Book";
import Repository from "./Repository";

class PostgreBookRepository implements Repository<Book> {
  public static createRepository() {
    return new PostgreBookRepository();
  }

  private pool: Pool;

  private constructor() {
    const port: number = +process.env.PG_PORT || 5432;

    this.pool = new Pool({
      database: process.env.PG_DATABASE,
      host: process.env.PG_HOST,
      password: process.env.PG_PASSWORD,
      port,
      user: process.env.PG_USERNAME,
    });

    this.pool.query("SELECT NOW()", (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully connected to Postgres!");
      }
      this.pool.end();
    });
  }

  public fetchAll(): Book[] {
    return [];
  }

  public findById(id: number): Book {
    return undefined;
  }
}

export default PostgreBookRepository;
