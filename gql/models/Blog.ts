import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Blog {
    @Field(() => ID)
    id: string;

    @Field()
    title: string;
}
