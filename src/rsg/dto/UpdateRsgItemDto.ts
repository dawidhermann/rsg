import { IsNotEmpty } from 'class-validator';

export class UpdateRsgItemDto {
  @IsNotEmpty()
  content: string;
}
