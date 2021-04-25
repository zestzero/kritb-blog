import { Blog } from "gql/models/Blog";
import { Service } from "typedi";
import { DatabaseService, DataSnapshot } from "./DatabaseService";

@Service()
export class BlogService {
  constructor(private databaseService: DatabaseService) {}

  public getBlogs = async (): Promise<Blog[]> => {
    const result: Blog[] = [];
    const response = await this.databaseService.fetch("blogs");
    if (response) {
      response.forEach((blog: DataSnapshot) => {
        result.push({
          id: blog.child("id").val(),
          title: blog.child("title").val(),
        });
      });
    }
    return result;
  };
}
