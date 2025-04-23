
import { z } from "zod";

export const applicationFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  age: z.string().optional(),
  occupation: z.string().optional(),
  maritalStatus: z.string().optional(),
  currentJob: z.string().optional(),
  company: z.string().optional(),
  previousInvestments: z.string().optional(),
  broker: z.string().optional(),
  location: z.string().optional(),
  portfolioSize: z.string().optional(),
  investmentBudget: z.string().optional(),
  assetsHeld: z.array(z.string()).default([]),
  message: z.string().optional(),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;
