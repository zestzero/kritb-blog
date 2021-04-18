import { FirebaseService } from "./FirebaseService";

class DatabaseService {
  private Database = FirebaseService.App.database();
  
  public fetch = async (path: string, limit: number = 10) => {
    try {
      return this.Database.ref(path).limitToFirst(limit).get();
    } catch (error) {
      console.log("Firebase admin initialization error", error.stack);
    }
  }
}

export default DatabaseService;
