import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Brand, Type, Status } from '@prisma/client';

export class CreateCollectionDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly year: number;

  @ApiProperty({ default: Brand.KINDER })
  readonly brand: Brand;

  @ApiProperty()
  @IsNotEmpty()
  readonly type: Type;

  @ApiProperty({ default: Status.EMPTY })
  readonly status: Status;

  @ApiProperty({ default: false })
  readonly showOnHome: boolean;
}
