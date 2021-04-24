import { FirebaseService } from "./FirebaseService";

class DatabaseService {
  private Database = FirebaseService.App.database();
  
  public fetch = async (path: string, limit: number = 10) => {
    try {
      return this.Database.ref(path).limitToFirst(limit).get();
    } catch (error) {
      console.log("Unable to fetch", error.stack);
    }
  }

  public write = async (path: string, value: object) => {
    try {
      return this.Database.ref(path).set(value)
    } catch (error) {
      console.log("Unable to write", error.stack);
    }
  }
}

export default DatabaseService;
