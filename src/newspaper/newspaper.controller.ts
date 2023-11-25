import { Controller } from '@nestjs/common';
import { NewspaperService } from './newspaper.service';

@Controller('newspaper')
export class NewspaperController {
  constructor(private readonly newspaperService: NewspaperService) {}
}
