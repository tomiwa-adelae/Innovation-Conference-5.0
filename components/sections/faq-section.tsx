import { faqs } from "@/lib/data/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
            Common Questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to know before you arrive.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 space-y-3 border-0"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still have questions?{" "}
          <a
            href="/contact"
            className="font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            Reach out to us
          </a>
        </p>
      </div>
    </section>
  )
}
