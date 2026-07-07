import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import "./company.css";

export default function CompanyPage() {
  return (
    <div className="pg-company">
      {/* A1 overview hero */}
      <section className="chero">
        <img
          className="bg"
          src="/assets/company/overview-v1.png"
          alt="KEYA Knit Composite manufacturing facility"
        />
        <div className="wrap">
          <span className="eyebrow">About KEYA Knit Composite</span>
          <h1>
            Two decades of turning yarn into finished garments — under one roof.
          </h1>
          <p>
            A vertically integrated knit composite in Gazaria, Munshiganj,
            Bangladesh. From knitting and dyeing to cutting, sewing, finishing
            and export — we control every stage so our partners get consistent
            quality, honest pricing and reliable shipments at any scale.
          </p>
          <div className="cta">
            <Link className="btn btn-buy" href="/catalogue">
              Explore products
            </Link>
            <Link className="btn btn-ghost-l" href="/quote">
              Request a quote →
            </Link>
          </div>
        </div>
      </section>

      {/* stat band */}
      <div className="statband">
        <div className="wrap">
          <div className="grid">
            <Reveal className="s">
              <div className="num tnum">
                <Counter to={20} />+
              </div>
              <div className="lab">Years of manufacturing</div>
            </Reveal>
            <Reveal className="s">
              <div className="num tnum">
                <Counter to={5000} k />+
              </div>
              <div className="lab">Skilled workforce</div>
            </Reveal>
            <Reveal className="s">
              <div className="num tnum">
                <Counter to={3.5} dec={1} />M+
              </div>
              <div className="lab">Pieces / month capacity</div>
            </Reveal>
            <Reveal className="s">
              <div className="num tnum">
                <Counter to={30} />+
              </div>
              <div className="lab">Export markets served</div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* A2 manufacturing strength */}
      <section className="blk">
        <div className="wrap">
          <div className="split">
            <Reveal className="txt">
              <span className="eyebrow">Vertical Integration</span>
              <h2>
                One continuous line — from raw yarn to packed export cartons.
              </h2>
              <p className="lede">
                Most suppliers hand your order between separate factories. We
                don&apos;t. Every step happens inside our own composite, which
                means tighter quality control, shorter lead times and full
                traceability on every garment.
              </p>
              <ul className="ftlist">
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                  </span>
                  <div>
                    <b>In-house knitting & dyeing</b>
                    <span>
                      Circular knitting, fabric dyeing and finishing under our
                      own roof and QC.
                    </span>
                  </div>
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2l3 6 6 .5-4.5 4 1.5 6L12 15l-6 3.5 1.5-6L3 8.5 9 8z" />
                    </svg>
                  </span>
                  <div>
                    <b>Cut, make & trim precision</b>
                    <span>
                      Automated spreading and cutting feeding balanced sewing
                      lines.
                    </span>
                  </div>
                </li>
                <li>
                  <span className="ic">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l4 4L20 6" />
                    </svg>
                  </span>
                  <div>
                    <b>Finishing, packing & export</b>
                    <span>
                      Ironing, folding, tagging, cartoning and documentation for
                      shipment.
                    </span>
                  </div>
                </li>
              </ul>
            </Reveal>
            <Reveal className="figure">
              <img
                src="/assets/home/process-v1.png"
                alt="Nine-step manufacturing process flow"
              />
              <div className="tag">9-stage composite process</div>
            </Reveal>
          </div>

          <div className="procflow">
            <Reveal className="pstep">
              <div className="k">01</div>
              <h4>Yarn sourcing</h4>
              <p>Certified cotton & blended yarn, lot-tested on intake.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">02</div>
              <h4>Knitting</h4>
              <p>300+ circular knitting machines for greige fabric.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">03</div>
              <h4>Dyeing</h4>
              <p>Fabric dyeing with lab-matched shade approval.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">04</div>
              <h4>Finishing</h4>
              <p>Compacting, stentering, GSM & shrinkage control.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">05</div>
              <h4>Cutting</h4>
              <p>Automated spreading & cutting for consistency.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">06</div>
              <h4>Sewing</h4>
              <p>4,000+ sewing machines across balanced lines.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">07</div>
              <h4>Quality check</h4>
              <p>In-line & end-line AQL inspection.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">08</div>
              <h4>Finishing & press</h4>
              <p>Ironing, folding, tagging & labelling.</p>
            </Reveal>
            <Reveal className="pstep">
              <div className="k">09</div>
              <h4>Packing & export</h4>
              <p>Cartoning, documentation & global shipment.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A3 quality assurance */}
      <section className="blk tint">
        <div className="wrap">
          <div className="split rev">
            <Reveal className="figure">
              <img
                src="/assets/company/qa-v1.png"
                alt="Quality inspection and fabric testing lab"
              />
              <div className="tag">Inspection & testing lab</div>
            </Reveal>
            <Reveal className="txt">
              <span className="eyebrow">Quality Assurance</span>
              <h2>Checked at every stage — not just before it ships.</h2>
              <p className="lede">
                Quality is built in, not inspected in at the end. Our teams test
                fabric on arrival and inspect garments in-line and end-line to
                internationally recognised AQL standards.
              </p>
            </Reveal>
          </div>
          <div className="qagrid">
            <Reveal className="qacard">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h4>Fabric testing</h4>
              <p>
                GSM, shrinkage, colour-fastness and composition verified per
                lot.
              </p>
            </Reveal>
            <Reveal className="qacard">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 7h16v13H4z" />
                  <path d="M4 7l4-4h8l4 4" />
                </svg>
              </div>
              <h4>In-line QC</h4>
              <p>Roving inspectors catch defects at the machine, not at the box.</p>
            </Reveal>
            <Reveal className="qacard">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                </svg>
              </div>
              <h4>End-line AQL</h4>
              <p>Final audit to agreed AQL levels before packing sign-off.</p>
            </Reveal>
            <Reveal className="qacard">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3v18M18 3v18M6 8h12M6 14h12" />
                </svg>
              </div>
              <h4>Metal detection</h4>
              <p>Needle & metal detection on finished garments for safety.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A4 sustainability & compliance */}
      <section className="blk">
        <div className="wrap">
          <div className="split">
            <Reveal className="txt">
              <span className="eyebrow">Sustainability & Compliance</span>
              <h2>Responsible by design, certified by audit.</h2>
              <p className="lede">
                A full effluent treatment plant, solar generation and
                water-conscious dyeing sit alongside internationally recognised
                social and product compliance — so your brand&apos;s standards
                are met on the ground.
              </p>
              <div className="certgrid">
                <Reveal className="cert">
                  <span className="b">OEKO</span>
                  <div>
                    <b>OEKO-TEX 100</b>
                    <span>Tested for harmful substances</span>
                  </div>
                </Reveal>
                <Reveal className="cert">
                  <span className="b">GOTS</span>
                  <div>
                    <b>GOTS Organic</b>
                    <span>Organic textile standard</span>
                  </div>
                </Reveal>
                <Reveal className="cert">
                  <span className="b">GRS</span>
                  <div>
                    <b>GRS Recycled</b>
                    <span>Recycled content verified</span>
                  </div>
                </Reveal>
                <Reveal className="cert">
                  <span className="b">WRAP</span>
                  <div>
                    <b>WRAP</b>
                    <span>Responsible production</span>
                  </div>
                </Reveal>
                <Reveal className="cert">
                  <span className="b">BSCI</span>
                  <div>
                    <b>amfori BSCI</b>
                    <span>Social compliance</span>
                  </div>
                </Reveal>
                <Reveal className="cert">
                  <span className="b">SEDEX</span>
                  <div>
                    <b>Sedex SMETA</b>
                    <span>Ethical audit</span>
                  </div>
                </Reveal>
              </div>
            </Reveal>
            <Reveal className="figure">
              <img
                src="/assets/home/sustainability-v1.png"
                alt="Effluent treatment plant and solar-roof factory"
              />
              <div className="tag">ETP + solar-powered facility</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A5 infrastructure */}
      <section className="blk tint">
        <div className="wrap">
          <div className="split rev">
            <Reveal className="figure">
              <img
                src="/assets/company/infrastructure-v1.png"
                alt="Knitting and sewing floor infrastructure"
              />
              <div className="tag">300+ knitting · 4,000+ sewing machines</div>
            </Reveal>
            <Reveal className="txt">
              <span className="eyebrow">Infrastructure & Capacity</span>
              <h2>Built to scale from a sample run to a container order.</h2>
              <p className="lede">
                Purpose-built floors and a deep machine base let us hold quality
                while flexing volume — a capacity that turns &quot;can you make
                twenty thousand?&quot; into a firm delivery date.
              </p>
            </Reveal>
          </div>
          <div className="infra-metrics">
            <Reveal className="im">
              <div className="num tnum">
                <Counter to={300} />+
              </div>
              <div className="lab">Circular knitting machines</div>
            </Reveal>
            <Reveal className="im">
              <div className="num tnum">
                <Counter to={4000} k />+
              </div>
              <div className="lab">Sewing machines</div>
            </Reveal>
            <Reveal className="im">
              <div className="num tnum">
                <Counter to={120} />K+
              </div>
              <div className="lab">Pieces / day output</div>
            </Reveal>
            <Reveal className="im">
              <div className="num tnum">
                <Counter to={3.5} dec={1} />M+
              </div>
              <div className="lab">Pieces / month capacity</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A6 export capability */}
      <section className="blk">
        <div className="wrap">
          <div className="split">
            <Reveal className="txt">
              <span className="eyebrow">Global Export Capability</span>
              <h2>Shipping to retailers across four continents.</h2>
              <p className="lede">
                We export to Europe, North America, Australia and Asia — working
                to FOB, CIF and DDP terms with full export documentation handled
                in-house.
              </p>
              <div className="marketlist">
                <Reveal>
                  <span className="pin" />
                  United Kingdom
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Germany
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Netherlands
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  France
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Spain
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  United States
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Canada
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Australia
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Poland
                </Reveal>
                <Reveal>
                  <span className="pin" />
                  Japan
                </Reveal>
              </div>
            </Reveal>
            <Reveal className="figure">
              <img
                src="/assets/home/exportmap-v1.png"
                alt="World export map with market pins"
              />
              <div className="tag">30+ export markets</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* A7 partners */}
      <section className="blk tint">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow">Trusted By</span>
          <h2 style={{ margin: "12px auto 8px" }}>
            Global brands ship with us — season after season.
          </h2>
          <p className="lede" style={{ margin: "0 auto" }}>
            A representative selection of the retailers and brands our composite
            supplies.
          </p>
          <div className="logowall">
            <Reveal className="lg">H&M</Reveal>
            <Reveal className="lg">ZARA</Reveal>
            <Reveal className="lg">Primark</Reveal>
            <Reveal className="lg">C&A</Reveal>
            <Reveal className="lg">LPP</Reveal>
            <Reveal className="lg">KIABI</Reveal>
            <Reveal className="lg">Pull&Bear</Reveal>
            <Reveal className="lg">Bershka</Reveal>
            <Reveal className="lg">Terranova</Reveal>
            <Reveal className="lg">Lindex</Reveal>
            <Reveal className="lg">OVS</Reveal>
            <Reveal className="lg">Matalan</Reveal>
          </div>
        </div>
      </section>

      {/* A8 why choose + values */}
      <section className="blk">
        <div className="wrap">
          <span className="eyebrow">Why Choose KEYA</span>
          <h2>Five reasons partners keep coming back.</h2>
          <div className="whygrid">
            <Reveal className="why">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </span>
              <div>
                <h4>True vertical integration</h4>
                <p>
                  Yarn to export under one roof — fewer hand-offs, tighter
                  control, faster turnaround.
                </p>
              </div>
            </Reveal>
            <Reveal className="why">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v20M6 6h9a3 3 0 010 6H6m0 0h11" />
                </svg>
              </span>
              <div>
                <h4>Honest, competitive pricing</h4>
                <p>
                  Owning the full chain removes middle margins — you get
                  factory-direct value.
                </p>
              </div>
            </Reveal>
            <Reveal className="why">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              <div>
                <h4>Consistent quality</h4>
                <p>
                  Multi-stage AQL and fabric testing keep every batch on spec.
                </p>
              </div>
            </Reveal>
            <Reveal className="why">
              <span className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M3 13l3-8h10l3 8M3 13h18v5H3z" />
                  <circle cx="7" cy="18" r="1.6" />
                  <circle cx="17" cy="18" r="1.6" />
                </svg>
              </span>
              <div>
                <h4>Reliable shipments</h4>
                <p>
                  Deep capacity and in-house export documentation mean dates you
                  can plan around.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="blk dark">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow">Our Values</span>
          <h2 style={{ margin: "12px auto 8px" }}>What guides how we make.</h2>
          <div className="values">
            <Reveal className="val">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
                </svg>
              </div>
              <h4>Integrity</h4>
              <p>Honest specs, honest pricing, honest timelines.</p>
            </Reveal>
            <Reveal className="val">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Investing in machinery, systems and cleaner processes.</p>
            </Reveal>
            <Reveal className="val">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="9" cy="8" r="3" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M3 20a6 6 0 0112 0M14 20a5 5 0 017 0" />
                </svg>
              </div>
              <h4>Teamwork</h4>
              <p>5,000+ people moving as one composite.</p>
            </Reveal>
            <Reveal className="val">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />
                </svg>
              </div>
              <h4>Passion</h4>
              <p>Pride in every stitch that leaves the floor.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="blk">
        <div className="wrap">
          <Reveal className="ctaband">
            <h2>Let&apos;s create a better future together.</h2>
            <p>
              Whether you need a retail-ready reorder or a fully customised bulk
              programme, our team will get you a clear answer fast.
            </p>
            <div className="cta">
              <Link className="btn btn-buy" href="/catalogue">
                Shop products
              </Link>
              <Link className="btn btn-ghost-l" href="/quote">
                Request a quote →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
