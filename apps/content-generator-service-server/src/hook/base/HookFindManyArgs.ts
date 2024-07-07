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
import { HookWhereInput } from "./HookWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HookOrderByInput } from "./HookOrderByInput";

@ArgsType()
class HookFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HookWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HookWhereInput, { nullable: true })
  @Type(() => HookWhereInput)
  where?: HookWhereInput;

  @ApiProperty({
    required: false,
    type: [HookOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HookOrderByInput], { nullable: true })
  @Type(() => HookOrderByInput)
  orderBy?: Array<HookOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HookFindManyArgs as HookFindManyArgs };
