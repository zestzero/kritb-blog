import admin from "firebase-admin";
import { FirebaseService } from "./FirebaseService";

const app = FirebaseService.App;
class DatabaseService {
  static fetchData = () => {
    if (!admin.apps.length) {
      try {
        return app.database().ref('test');
      } catch (error) {
        console.log("Firebase admin initialization error", error.stack);
      }
    }
  }
}

export default DatabaseService;
