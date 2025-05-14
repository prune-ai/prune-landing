export default function Issues() {
  return (
    <div className="min-h-screen bg-[#18183B] text-white flex justify-center items-center flex-col py-16 px-4 text-start font-sans">
      <div className="max-w-[570px] mx-auto py-[100px] text-white space-y-10">
        <section>
          <h2 className="text-xl  text-white font-mono mb-4">
            What’s the problem?
          </h2>
          <p className="text-base font-inter leading-relaxed text-[#D4D4D8]">
            The internet is a wild and blooming garden full of potential for
            creativity, connection and chaos. But beauty unchecked can grow over
            with rot. Every day, thousands of new links to non-consensual abuse
            material go live on the internet.
          </p>
          <p className="text-base font-inter leading-relaxed text-[#D4D4D8] mt-4">
            Most of this content doesn’t live on mainstream platforms. 85–90% of
            persistent NCSAM circulates on shadow infrastructure: a fragmented
            network of intentionally obscure foreign run pirated properties like
            tube clones, offshore forums, and aggregators.
          </p>
          <p className="text-base font-inter  leading-relaxed text-[#D4D4D8] mt-4">
            These sites are financially enabled by a complex web of ad networks,
            affiliate programs, and high-risk payment processors. Content stays
            up for weeks, months, years – even decades after takedown requests.
            There are no enforceable standards for what action is required, or
            how quickly it should happen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-mono text-white mb-4">
            What we’re doing
          </h2>
          <p className="text-base font-inter leading-relaxed text-[#D4D4D8]">
            Prune is changing the way consent is enforced online. We are
            designing the infrastructure that makes consent
            enforceable—consistently, affordably, and at scale.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
            First, we identify how harmful content is being monetized—whether
            through ad networks, payment processors, affiliate schemes, or
            hosting infrastructure. Then we notify the entities involved. If
            they fail to act, we escalate and partner with victims to fight for
            restitution.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
            And when companies are ready to clean up their systems, we offer the
            tools to do it: lightweight, plug and play compliance tools like
            user-facing takedown flows, systems that monitor and remove non
            consensual content within minutes, and built-in documentation that
            creates a clear audit trail.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
            We don’t charge victims and we never will. Our work is funded by
            platforms that want to act responsibly—and by the legal consequences
            for those that don’t.
          </p>
          <p className="text-base  font-inter  leading-relaxed text-[#D4D4D8] mt-4">
            We can’t control everything that grows online—but we can choose what
            to cut back. Let’s work together to create new standards for consent
            in the digital age.
          </p>
        </section>
      </div>
    </div>
  );
}
