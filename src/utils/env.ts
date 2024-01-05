import dotenv from 'dotenv';
import { z } from 'zod';
dotenv.config();

const env = z
  .object({
    PORT: z.number().optional().default(3000),
    NODE_ENV: z.enum(['dev', 'production', 'test', 'stage']).default('dev'),
    BUGSNAG_API_KEY: z.string(),
    BUGSNAG_ENV: z.string(),
  })
  .parse(process.env);

export default env;
