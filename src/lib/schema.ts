import { z } from 'zod';

export const brandSchema = z.object({
  companyName: z.string(),
  tagline: z.string().describe("Short, punchy tagline"),

  colors: z.object({
    primary: z.string().describe("Main Hex code"),
    accent: z.string().describe("Secondary Hex code"),
    background: z.string().describe("Background Hex code (usually light/off-white)"),
  }),

  websiteHtml: z.string().describe("Complete single-file index.html using Tailwind CSS via CDN. Must include Hero, Services, About, Contact."),
  logoSvg: z.string().describe("Minimalist, scalable SVG code for the logo."),
  
  readme: z.string().describe("Short instructions on how to upload the HTML file to Netlify/Stripe."),
});

export type BrandSchema = z.infer<typeof brandSchema>;