import { PrismaClient } from '@prisma/client';

let prismaConfig: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaConfig = new PrismaClient();
} else {
  if (!(global as any ).prisma as any) {
    (global as any ).prisma = new PrismaClient();
  }
  prismaConfig = (global as any ).prisma;
}

export default prismaConfig;