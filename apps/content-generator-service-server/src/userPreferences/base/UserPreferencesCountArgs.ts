/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserPreferencesWhereInput } from "./UserPreferencesWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserPreferencesCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserPreferencesWhereInput,
  })
  @Field(() => UserPreferencesWhereInput, { nullable: true })
  @Type(() => UserPreferencesWhereInput)
  where?: UserPreferencesWhereInput;
}

export { UserPreferencesCountArgs as UserPreferencesCountArgs };
