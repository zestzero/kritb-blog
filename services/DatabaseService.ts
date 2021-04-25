import { database } from "firebase-admin/lib/database";
import { Service } from "typedi";
import { FirebaseService } from "./FirebaseService";

export type DataSnapshot = database.DataSnapshot;

@Service()
export class DatabaseService {
  private Database = FirebaseService.App.database();

  public fetch = async (path: string, limit: number = 10): Promise<DataSnapshot | undefined> => {
    try {
      return this.Database.ref(path).limitToFirst(limit).once("value");
    } catch (error) {
      console.log("Unable to fetch", error.stack);
    }
  };

  public write = async (path: string, value: object) => {
    try {
      return this.Database.ref(path).set(value);
    } catch (error) {
      console.log("Unable to write", error.stack);
    }
  };
}
