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
import { UserPreferencesWhereInput } from "./UserPreferencesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserPreferencesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserPreferencesWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPreferencesWhereInput)
  @IsOptional()
  @Field(() => UserPreferencesWhereInput, {
    nullable: true,
  })
  every?: UserPreferencesWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPreferencesWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPreferencesWhereInput)
  @IsOptional()
  @Field(() => UserPreferencesWhereInput, {
    nullable: true,
  })
  some?: UserPreferencesWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPreferencesWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPreferencesWhereInput)
  @IsOptional()
  @Field(() => UserPreferencesWhereInput, {
    nullable: true,
  })
  none?: UserPreferencesWhereInput;
}
export { UserPreferencesListRelationFilter as UserPreferencesListRelationFilter };
