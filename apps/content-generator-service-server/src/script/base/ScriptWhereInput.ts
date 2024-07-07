/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ContentIdeaWhereUniqueInput } from "../../contentIdea/base/ContentIdeaWhereUniqueInput";
import { HookWhereUniqueInput } from "../../hook/base/HookWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class ScriptWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ContentIdeaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContentIdeaWhereUniqueInput)
  @IsOptional()
  @Field(() => ContentIdeaWhereUniqueInput, {
    nullable: true,
  })
  contentIdea?: ContentIdeaWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => HookWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HookWhereUniqueInput)
  @IsOptional()
  @Field(() => HookWhereUniqueInput, {
    nullable: true,
  })
  hook?: HookWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { ScriptWhereInput as ScriptWhereInput };
