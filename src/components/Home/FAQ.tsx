import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '../ui/button';

export default function FAQ() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex items-center justify-center'>
        <h1 className='text-[35px] font-bold'>Frequenly Asked Questions</h1>
      </div>
      <div className='w-[600px]'>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              What do you mean by public-facing usage?
            </AccordionTrigger>
            <AccordionContent className='text-dark_gray'>
              We define public-facing usage as leveraging CARTO to power
              enterprise-scale applications that are made available to external
              parties such as clients or the public, as opposed to internal
              demonstration-only applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>
              Can i buy more storage for my individual plan?
            </AccordionTrigger>
            <AccordionContent className='text-dark_gray'>
              We define public-facing usage as leveraging CARTO to power
              enterprise-scale applications that are made available to external
              parties such as clients or the public, as opposed to internal
              demonstration-only applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              What happens to my data after the trial or if i cancel my
              subscription?
            </AccordionTrigger>
            <AccordionContent className='text-dark_gray'>
              We define public-facing usage as leveraging CARTO to power
              enterprise-scale applications that are made available to external
              parties such as clients or the public, as opposed to internal
              demonstration-only applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              Can i cancel my monthly or annual subscription?
            </AccordionTrigger>
            <AccordionContent className='text-dark_gray'>
              We define public-facing usage as leveraging CARTO to power
              enterprise-scale applications that are made available to external
              parties such as clients or the public, as opposed to internal
              demonstration-only applications.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Button className='border-primary_blue text-primary_blue hover:bg-primary_blue rounded-full border bg-white px-10 py-6 font-bold hover:text-white'>
          Learn More
        </Button>
      </div>
    </div>
  );
}
