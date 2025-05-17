import Card from "@/components/Card";
import CardHeader from "@/components/Offer";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  const siteLogo =
    process.env.NEXT_PUBLIC_LOGO ||
    "vaame.svg";
  // Data from env
  const features =
    process.env.NEXT_PUBLIC_FEATURES ||
    "Send up to 3000 requests per month, Support large database schemas (400+ tables), Handle complex table relationships, Develop advanced analysis tools";
  const price = process.env.NEXT_PUBLIC_CURRENT_PRICE || "7";
  const discountPrice = process.env.NEXT_PUBLIC_DISCOUNT_PRICE || "14";
  const date = process.env.NEXT_PUBLIC_LAUNCH_DATE || "2025-09-01";
  const title =
    process.env.NEXT_PUBLIC_TITLE ||
    "Join the waitlist for Vaame SQL generation assistant.";
  const description =
    process.env.NEXT_PUBLIC_OFFER_TITLE || "Add offer title from env";

  console.log(price);
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteLogo}
        alt="logo"
        className="w-auto h-16 mx-auto object-contain mb-5"
      />
      <Card>
        <div className="grid md:grid-cols-2 md:divide-x divide-[#FE4D2]">
          <div className="md:order-1 order-2">
            <CardHeader
              title={description}
              features={features}
              price={price}
              discount={discountPrice}
            />
          </div>
          <div className="md:order-2 order-1">
            <EmailForm date={date} title={title} />
          </div>
        </div>

        {/* <CardFooter /> */}

        {/* element */}
        <span className="w-2 h-2 absolute z-10 -top-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -bottom-[1%] -left-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -top-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
        <span className="w-2 h-2 absolute z-10 -bottom-[1%] -right-[0.5%] block bg-white border border-[#F0E4D2]"></span>
      </Card>
    </div>
  );
}
