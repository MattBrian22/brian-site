import Diagram from "@/components/Diagram";
import DiscoveryForm from "@/components/DiscoveryForm";
import CalendarLoader from "@/components/CalendarLoader";
import RevealController from "@/components/RevealController";
import { Confirm, Ph } from "@/components/Marks";

const CAL_DISCOVERY =
  "https://cal.com/matthew-brian-tahir-hfneah/20mindiscoverycall";
const CAL_RETAINER = "https://cal.com/matthew-brian-tahir-hfneah/retainer";
const LINKEDIN ="https://www.linkedin.com/in/matthew-brian-tahir-725486251/";

export default function Home() {
  return (
    <>
      <RevealController />

      <header className="site-header">
        <div className="wrap site-header-row">
          <a href="#top" className="site-name">
            Matthew Brian Tahir
          </a>
          <nav aria-label="Page sections">
            <a href="#why">Why</a>
            <a href="#built">What I built</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <h1>Matthew Brian Tahir</h1>
            <p className="hero-meta">
              CS graduate · Operations analysis · Evidence verification
            </p>
            <p className="pull">
              How do you make a decision you can stand behind when someone
              asks you to prove it?
            </p>
          </div>
        </section>

        <section id="why" className="wrap" data-reveal>
          <div className="entry grid12">
            <p className="entry-label">01 / WHY</p>
            <div className="entry-body">
              <h2>Where the thinking began</h2>
              <p>
                I started out studying Computer Science at Aston University,
                but I became more interested in a gap that the field tends to
                overlook: the gap between an impressive analysis and a
                defensible one.
              </p>
              <p>
                My final-year project made that gap concrete. Every week, my
                supervisor asked me to prove that my analysis was rigorous. Not
                just to show the result, but to show the workings, and to
                explain the why behind every claim. I had to document every
                step, cite every source, and defend the route I had taken.
              </p>
              <p>
                That experience taught me that an analysis is only as valuable
                as its ability to withstand scrutiny. The work is not the
                answer. The work is the proof that the answer is grounded.
              </p>
            </div>
          </div>
        </section>

        <section id="evidence" className="wrap" data-reveal>
          <div className="entry grid12">
            <p className="entry-label">02 / EVIDENCE</p>
            <div className="entry-body">
              <h2>
                Learning how to turn an analysis into evidence that you can
                stand behind
              </h2>
              <p>
                Early on, I noticed that the most impressive analysis is often
                the least defensible. A model produces a clean projection. A
                junior analyst writes a confident summary. The numbers look
                reasonable. But when the decision gets challenged, nobody can
                point to the exact sentence in the source document that
                justifies it.
              </p>
              <p>
                I became more interested in the gap between the analysis and
                the evidence. Why does a decision that looks sound on the day
                it is made become impossible to defend six months later? The
                answer is usually not that the analysis was wrong. It is that
                the route from the evidence to the conclusion was never
                recorded.
              </p>
              <p>
                That is what I build now. Not better analysis. The record that
                shows the analysis was grounded in the evidence.
              </p>
            </div>
          </div>
        </section>

        <section id="built" className="wrap" data-reveal>
          <div className="entry grid12">
            <p className="entry-label">03 / WHAT I BUILT</p>
            <div className="entry-body">
              <h2>What I built</h2>
              <p>
                A procedure. It takes a bundle of documents, checks every
                quotation word for word against the source, and produces a
                signed record that can be replayed. The model writes. The
                program checks.
              </p>
            </div>

            <figure className="figure" data-draw>
              <figcaption className="aside">
                The model writes. The program checks.
              </figcaption>
              <div className="figure-art">
                <Diagram />
              </div>
            </figure>

            <div className="entry-body entry-body-after">
              <p>
                It does not certify the conclusion. It records the route. The
                seal shows that the record has not been altered since it was
                sealed, within what the seal covers today.
              </p>
            </div>
          </div>
        </section>

        <section id="next" className="wrap" data-reveal>
          <div className="entry grid12">
            <p className="entry-label">04 / WHAT IS NEXT</p>
            <div className="entry-body">
              <h2>What is next</h2>
              <p>
                That shift calls for a new procedure. Not a better model, but a
                record that shows what the person checked, how they reasoned,
                and what they signed off on.
              </p>
              <p>
                I built the procedure, and I am looking for professionals who
                are already held to that standard to run it with. If your firm
                is restructuring the way it trains, verifies, or defends its
                conclusions, I would rather show you the procedure than ask you
                to trust it.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="band" data-reveal>
          <div className="wrap">
            <p className="eyebrow">PRIVATE VIEWINGS</p>
            <h2>Book a discovery call</h2>
            <p className="band-sub">
              <Confirm>
                &quot;I take on a small number of specialist engagements.&quot;
                Keep only if true.
              </Confirm>{" "}
              We discuss your AI and verification challenges before I show you
              the procedure.
            </p>

            <div className="band-split">
              <DiscoveryForm />
              <CalendarLoader
                url={CAL_DISCOVERY}
                title="Calendar for booking a 20-minute discovery call"
                heading="Prefer to pick a time directly?"
              />
            </div>

            <div className="cards">
              <article className="card">
                <h3>20-Minute Discovery</h3>
                <p>
                  We discuss your current challenges with AI, document
                  verification and defensibility. If it is a fit, I will invite
                  you to a private viewing of the procedure.
                </p>
                <div className="card-cal">
                  <CalendarLoader
                    url={CAL_DISCOVERY}
                    title="Calendar for booking a 20-minute discovery call"
                  />
                </div>
              </article>
              <article className="card">
                <h3>Specialist Retainer</h3>
                <p>
                  Monthly engagement. Covers running the procedure on live
                  matters, producing signed records, and integrating with your
                  existing infrastructure (BYOM). From £750 per month.
                </p>
                <div className="card-cal">
                  <CalendarLoader
                    url={CAL_RETAINER}
                    title="Calendar for booking a specialist retainer call"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <Ph>[EMAIL]</Ph> ·{" "}
          <a href={LINKEDIN} rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
