import Reveal from "../components/Reveal";

const About = () => {
  return (
    <div className="text-slate-900">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              About Us
            </h1>

            <p className="text-green-600 font-semibold mb-4">
              Serving Humanity with Commitment
            </p>

            <p className="text-slate-600 max-w-3xl mx-auto leading-7">
              Friends Club Pakistan Welfare Foundation is committed to serving
              humanity through welfare initiatives, relief efforts, and
              community support programs across Pakistan.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-7">
                Our mission is to support underprivileged communities by
                providing food assistance, medical support, relief services, and
                other welfare initiatives with sincerity, transparency, and
                compassion.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-semibold mb-4 text-slate-900">
                Our Vision
              </h2>
              <p className="text-slate-600 leading-7">
                Our vision is to build a society where humanity, dignity, and
                care reach every deserving person, and where collective efforts
                create lasting positive change.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-slate-900">
              Serving Humanity with Commitment
            </h2>
            <p className="text-slate-600 leading-7">
              We have participated in multiple welfare and relief efforts
              including food distribution, Ramadan dastarkhwan, flood relief,
              medical camps, and collective Qurbani support. Our goal is to
              continue expanding our efforts and reach more people in need
              through unity and public trust.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Our Supporters & Volunteers
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-7">
            Our strength lies in the dedication of our supporters, volunteers,
            and community members who continuously contribute towards our
            mission.
          </p>

          <div className="glass-card rounded-2xl p-8 max-w-xl mx-auto">
            <p className="text-slate-500 text-sm leading-6">
              Photos and names of our supporters and volunteers will be shared
              here soon.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default About;
