import { contactSchema } from './contact';
import portfolioProject from './project';
import categoryConfig from './category';
import clientLogo from './clientLogo';
import { order } from './order'; // order schema import করা হলো

export const schemaTypes = [
  contactSchema,
  portfolioProject,
  categoryConfig,
  clientLogo,
  order, // schema array-তে যুক্ত করা হলো
];