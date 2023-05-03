import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Unit } from '@prisma/client';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly unit: Unit;

  @ApiProperty()
  readonly amount: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly limit: number;

  @ApiProperty()
  readonly files: string[];
}

export class EditProductDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty()
  readonly name?: string;

  @ApiProperty()
  readonly unit?: Unit;

  @ApiProperty()
  readonly amount?: number;

  @ApiProperty()
  readonly limit?: number;

  @ApiProperty()
  readonly files?: string[];
}

export class PayloadProductDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty()
  readonly name?: string;

  @ApiProperty()
  readonly unit?: Unit;

  @ApiProperty()
  readonly amount?: string;

  @ApiProperty()
  readonly limit?: string;
}
