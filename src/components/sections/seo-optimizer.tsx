'use client';

import {getSeoKeywords} from '@/app/actions';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {portfolioData} from '@/lib/portfolio-data';
import {Lightbulb, Loader2, Search} from 'lucide-react';
import {useEffect, useRef} from 'react';
import {useFormState, useFormStatus} from 'react-dom';
import {useToast} from '@/hooks/use-toast';
import {Section, SectionHeading, SectionSubheading} from './section';

const initialState = {
  data: null,
  error: null,
  fieldErrors: {},
};

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" /> Optimizing...
        </>
      ) : (
        <>
          <Search className="mr-2 size-4" /> Optimize SEO
        </>
      )}
    </Button>
  );
}

const SeoOptimizer = () => {
  const [state, formAction] = useFormState(getSeoKeywords, initialState);
  const {toast} = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const allSkills = Object.values(portfolioData.skills).flat().join(', ');
  const portfolioContent = `${portfolioData.summary} \n\n${portfolioData.about}`;

  useEffect(() => {
    if (state.error && !state.fieldErrors) {
      toast({
        variant: 'destructive',
        title: 'Optimization Failed',
        description: state.error,
      });
    }
    if (state.data) {
      formRef.current?.reset();
      toast({
        title: 'Success!',
        description: 'SEO keywords have been generated.',
      });
    }
  }, [state, toast]);

  return (
    <Section id="seo-optimizer">
      <div className="text-center">
        <SectionHeading>AI SEO Optimizer</SectionHeading>
        <SectionSubheading>
          Enhance your portfolio's visibility with AI-driven keyword
          recommendations.
        </SectionSubheading>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get Keyword Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userSkills">Your Skills (comma-separated)</Label>
                <Input
                  id="userSkills"
                  name="userSkills"
                  defaultValue={allSkills}
                  aria-describedby="userSkills-error"
                />
                {state.fieldErrors?.userSkills && (
                  <p id="userSkills-error" className="text-sm text-destructive">
                    {state.fieldErrors.userSkills.join(', ')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolioContent">Portfolio Content</Label>
                <Textarea
                  id="portfolioContent"
                  name="portfolioContent"
                  defaultValue={portfolioContent}
                  rows={8}
                  className="font-code text-xs"
                  aria-describedby="portfolioContent-error"
                />
                {state.fieldErrors?.portfolioContent && (
                  <p
                    id="portfolioContent-error"
                    className="text-sm text-destructive"
                  >
                    {state.fieldErrors.portfolioContent.join(', ')}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobDescription">
                  Target Job Description (Optional)
                </Label>
                <Textarea
                  id="jobDescription"
                  name="jobDescription"
                  placeholder="Paste a job description here for more targeted keywords..."
                  rows={5}
                />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            {state.data ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">Recommended Keywords:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {state.data.keywords.map((keyword, index) => (
                      <Badge key={index} variant="default">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">Explanation:</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {state.data.explanation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-8 text-center">
                <div className="flex flex-col items-center">
                  <Lightbulb className="size-10 text-muted-foreground" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Your keyword suggestions will appear here once you run the
                    optimizer.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default SeoOptimizer;
