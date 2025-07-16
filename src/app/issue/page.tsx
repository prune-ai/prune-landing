export default function Issues() {
  return (
    <div className="min-h-screen bg-[#18183B] text-white flex justify-center items-center flex-col py-16 px-4 text-start font-sans">
      <div className="max-w-[570px] mx-auto py-[100px] text-white space-y-10">
        <section>
          <h2 className="text-xl  text-white font-mono mb-4">
            What’s the problem?
          </h2>
          <p className="text-base font-inter leading-relaxed text-[#D4D4D8]">
          Illegal abuse content — including CSAM (child sexual abuse materials) 
          and content depicting trafficking victims — spreads online every day. 
          Most of it doesn’t live on mainstream platforms. Instead, it circulates 
          on <span className="font-bold">shadow infrastructure</span>: a fragmented network of intentionally obscure 
          foreign run pirated properties like tube clones, offshore forums, 
          and aggregators.
          </p>
          <p className="text-base font-inter leading-relaxed text-[#D4D4D8] mt-4">
          These sites are financially enabled by a complex web of ad networks, 
          affiliate programs, and high-risk payment processors. Content stays up for weeks, 
          months, years – even decades after takedown requests. There are no enforceable 
          standards for what action is required, or how quickly it should happen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-mono text-white mb-4">
            What we’re doing
          </h2>
          <p className="text-base font-inter leading-relaxed text-[#D4D4D8]">
          Prune weaponizes frontier AI models against the illegal sites laundering 
          abuse through legitimate infrastructure providers.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
          Our tools empower law enforcement and litigators to trace monetization pathways 
          — registrars, CDNs, ad networks, payment processors — and remove illegal content 
          at scale with surgical, legally-grounded precision.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
          At the same time, we help platforms mitigate risk by offering lightweight compliance tools. 
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
          Our mission is to build a safer, more accountable internet — one where enforcement is 
          narrowly targeted, evidence-based, and rooted in law.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
          We don’t charge victims and we never will. Our work is funded by platforms that want to 
          act responsibly—and by the legal consequences for those that don’t.
          </p>
        </section>
      </div>
    </div>
  );
}
