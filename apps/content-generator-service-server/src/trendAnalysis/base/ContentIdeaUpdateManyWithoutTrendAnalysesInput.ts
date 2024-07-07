/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ContentIdeaWhereUniqueInput } from "../../contentIdea/base/ContentIdeaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ContentIdeaUpdateManyWithoutTrendAnalysesInput {
  @Field(() => [ContentIdeaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContentIdeaWhereUniqueInput],
  })
  connect?: Array<ContentIdeaWhereUniqueInput>;

  @Field(() => [ContentIdeaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContentIdeaWhereUniqueInput],
  })
  disconnect?: Array<ContentIdeaWhereUniqueInput>;

  @Field(() => [ContentIdeaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ContentIdeaWhereUniqueInput],
  })
  set?: Array<ContentIdeaWhereUniqueInput>;
}

export { ContentIdeaUpdateManyWithoutTrendAnalysesInput as ContentIdeaUpdateManyWithoutTrendAnalysesInput };
