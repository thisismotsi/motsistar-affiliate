import Section from "@/components/Section";

export const metadata = {
  title: "Affiliate Disclosure"
};

export default function DisclosurePage() {
  return (
    <Section>
      <h1 className="mb-6 text-3xl font-bold">Affiliate Disclosure</h1>
      <div className="space-y-4 text-white/85">
        <p>
          MOTSISTAR participates in affiliate programs. When you click links on this site and make a purchase, we may earn a commission at no additional cost to you.
        </p>
        <p>
          As an Affiliate Platform, MOTSISTAR earns from qualifying purchases.
        </p>
        <p>
          We only recommend products we believe provide real value. Our opinions are our own and are not influenced by affiliate partnerships.
        </p>
        <p>
          Questions? Contact us at <a className="underline" href="mailto:info@motsistar.com">info@motsistar.com</a>.
        </p>
      </div>
    </Section>
  );
}
