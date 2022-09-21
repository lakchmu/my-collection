import { Injectable } from '@nestjs/common';

import { prisma } from './db';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const user = await prisma.user.findUnique({ where: { id: 1 } });
    return `Hello ${user.name}!`;
  }
}
