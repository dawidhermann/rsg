import { IsNotEmpty } from 'class-validator';

export class CreateRsgItemDto {
  @IsNotEmpty()
  content: string;
}
