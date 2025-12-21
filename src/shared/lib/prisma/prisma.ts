import { PrismaPg } from '@prisma/adapter-pg';
import { databaseUrl } from '~/shared/config/env-config';
import { PrismaClient } from './generated/client';

const connectionString = databaseUrl;

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
