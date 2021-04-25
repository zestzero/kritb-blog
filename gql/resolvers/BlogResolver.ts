import { Blog } from "gql/models/Blog";
import { BlogService } from "services/BlogService";
import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";

@Service()
@Resolver(Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Query(() => [Blog])
  async blogs() {
    return this.blogService.getBlogs();
  }
}
