import { streamObject } from 'ai';
import { google } from '@ai-sdk/google';
import { brandSchema } from '@/lib/schema'; 

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = streamObject({
    model: google('gemini-2.5-pro'), 
    schema: brandSchema,
    system: `You are an expert brand designer. 
             Generate or Update the brand identity based on the user's prompt.
             Always return the complete valid JSON object.`,
    prompt: prompt,
  });

  return result.toTextStreamResponse();
}