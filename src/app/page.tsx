import CompletionTime from "_@/app/_ui/completion-time";
import Contact from "_@/app/_ui/contact";
import ContactFooter from "_@/app/_ui/contact-footer";
import CostEstimates from "_@/app/_ui/cost-estimates";
import Header from "_@/app/_ui/header";
import Hero from "_@/app/_ui/hero";
import InformationToBeProvided from "_@/app/_ui/information-to-be-provided";
import MoveToTop from "_@/app/_ui/move-to-top";
import Procedure from "_@/app/_ui/procedure/procedure";
import ProductPrice from "_@/app/_ui/product-price/product-price";
import Questions from "_@/app/_ui/questions";
import Special from "_@/app/_ui/special";
import TableOfContents from "_@/app/_ui/table-of-contents";
import Thankyou from "_@/app/_ui/thankyou";
import ThingsToDo from "_@/app/_ui/things-to-do";

export const revalidate = 31536000;
export default function Home() {
  return (
    <>
      <div className="full-fledge">
        <div className="grid grid-cols-[1fr_calc(min(100vw,_var(--max-bound))_-_(var(--site-pad)*2))_1fr] [&>*]:col-span-1 [&>*]:col-start-2 border-b full-fledge">
          <Header />
        </div>
      </div>
      <MoveToTop />
      <Contact />

      <div className="full-fledge">
        <Hero />
      </div>
      <div className="grid grid-cols-[1fr_calc(min(100vw,_var(--max-bound))_-_(var(--site-pad)*2))_1fr] [&>*]:col-span-1 [&>*]:col-start-2 lg:-mt-4 full-fledge">
        <div className="gap-8 lg:gap-16 grid">
          <div className="gap-8 lg:gap-16 grid lg:bg-white lg:px-10 py-10 rounded-2xl">
            <TableOfContents />
            <ProductPrice />
            <CostEstimates />
            <CompletionTime />
            <InformationToBeProvided />
          </div>
          <Special />
          <Procedure />
          <ThingsToDo />
          <Questions />
        </div>
      </div>
      <div className="mx-[calc(-1*var(--max-padding))] mt-10">
        <Thankyou />
        <ContactFooter />
      </div>
    </>
  );
}
