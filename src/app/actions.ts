
'use server';

import {
  optimizePortfolioSeo,
  type OptimizePortfolioSeoInput,
  type OptimizePortfolioSeoOutput,
} from '@/ai/flows/optimize-portfolio-seo';
import {z} from 'zod';

const formSchema = z.object({
  portfolioContent: z.string().min(50, {
    message: 'Portfolio content must be at least 50 characters.',
  }),
  jobDescription: z.string().optional(),
  userSkills: z.string().min(1, {
    message: 'Please provide at least one skill.',
  }),
});

type SeoState = {
  data?: OptimizePortfolioSeoOutput | null;
  error?: string | null;
  fieldErrors?: {
    [key in keyof OptimizePortfolioSeoInput]?: string[];
  };
};

export async function getSeoKeywords(
  prevState: SeoState,
  formData: FormData
): Promise<SeoState> {
  const rawData = Object.fromEntries(formData);
  const parsed = formSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      error: 'Invalid form data. Please check your inputs.',
      fieldErrors: {
        portfolioContent: fieldErrors.portfolioContent,
        userSkills: fieldErrors.userSkills,
      },
    };
  }

  try {
    const input: OptimizePortfolioSeoInput = {
      ...parsed.data,
      userSkills: parsed.data.userSkills
        .split(',')
        .map(skill => skill.trim())
        .filter(Boolean),
    };

    const result = await optimizePortfolioSeo(input);
    return {data: result};
  } catch (e) {
    const error = e instanceof Error ? e.message : 'An unexpected error occurred.';
    console.error(error);
    return {error: `AI processing failed: ${error}`};
  }
}
