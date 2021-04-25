import { Service } from "typedi";
import { DatabaseService } from "./DatabaseService";

@Service()
export class BlogService {
  constructor(private databaseService: DatabaseService) {}

  public getBlogs = async () => {
    const result = await this.databaseService.fetch("blogs");
    console.debug(result?.toJSON());
    return result;
  };
}
