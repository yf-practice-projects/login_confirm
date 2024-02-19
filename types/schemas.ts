import { z } from 'zod';


export const UserSchema = z.object({
	id: z.number().nullable().optional(),
  name: z.string().nonempty("no-name"),
  email: z.string().nonempty("no-email").email("not-email"),
  password: z.string().nonempty("no-pass").min(4,"not-pass")
});