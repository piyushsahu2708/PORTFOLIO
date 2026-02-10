'use server';

/**
 * @fileOverview A flow to optimize portfolio SEO by suggesting recruiter-friendly keywords.
 *
 * - optimizePortfolioSeo - A function that handles the portfolio SEO optimization process.
 * - OptimizePortfolioSeoInput - The input type for the optimizePortfolioSeo function.
 * - OptimizePortfolioSeoOutput - The return type for the optimizePortfolioSeo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizePortfolioSeoInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The text content of the portfolio to be optimized.'),
  jobDescription: z
    .string()
    .optional()
    .describe('Optional job description for targeted keyword suggestions.'),
  userSkills: z.array(z.string()).describe('List of user skills'),
});

export type OptimizePortfolioSeoInput = z.infer<
  typeof OptimizePortfolioSeoInputSchema
>;

const OptimizePortfolioSeoOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe(
      'A list of recruiter-friendly keywords to improve search visibility.'
    ),
  explanation: z
    .string()
    .describe('Explanation of why keywords are recommended.'),
});

export type OptimizePortfolioSeoOutput = z.infer<
  typeof OptimizePortfolioSeoOutputSchema
>;

export async function optimizePortfolioSeo(
  input: OptimizePortfolioSeoInput
): Promise<OptimizePortfolioSeoOutput> {
  return optimizePortfolioSeoFlow(input);
}

const optimizePortfolioSeoPrompt = ai.definePrompt({
  name: 'optimizePortfolioSeoPrompt',
  input: {schema: OptimizePortfolioSeoInputSchema},
  output: {schema: OptimizePortfolioSeoOutputSchema},
  prompt: `You are an AI-powered SEO tool designed to analyze portfolio content and suggest recruiter-friendly keywords to improve search visibility.

Analyze the following portfolio content and provide a list of keywords that are relevant to the skills and experience described. Also, provide a short explanation of why the keywords are recommended.

Skills: {{userSkills}}
Portfolio Content: {{{portfolioContent}}}

{% if jobDescription %}Consider this job description:
{{jobDescription}}{% endif %}

Focus on keywords that recruiters are likely to use when searching for candidates with similar skills and experience. Return keywords that are most relevant to the provided portfolio content and user skills. Prioritize keywords that align with the user's skills and experience.
`, 
});

const optimizePortfolioSeoFlow = ai.defineFlow(
  {
    name: 'optimizePortfolioSeoFlow',
    inputSchema: OptimizePortfolioSeoInputSchema,
    outputSchema: OptimizePortfolioSeoOutputSchema,
  },
  async input => {
    const {output} = await optimizePortfolioSeoPrompt(input);
    return output!;
  }
);
