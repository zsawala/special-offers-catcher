import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('offers')
@UseGuards(AuthGuard)
export class OffersController {}
