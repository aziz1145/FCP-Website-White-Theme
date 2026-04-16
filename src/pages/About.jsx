import { useState } from "react";
import Reveal from "../components/Reveal";
import { teamMembers } from "../assets/data/team.js";

const About = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="text-slate-900">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <Reveal>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-green-600 md:text-5xl">
              About Us
            </h1>

            <p className="mb-4 font-semibold text-green-600">
              Serving Humanity with Commitment
            </p>

            <p className="mx-auto max-w-3xl leading-7 text-slate-600">
              Friends Club Pakistan Welfare Foundation is committed to serving
              humanity through welfare initiatives, relief efforts, and
              community support programs across Pakistan.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full rounded-2xl p-8">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                Our Mission
              </h2>
              <p className="leading-7 text-slate-600">
                Our mission is to support underprivileged communities by
                providing food assistance, medical support, relief services, and
                other welfare initiatives with sincerity, transparency, and
                compassion.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass-card h-full rounded-2xl p-8">
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">
                Our Vision
              </h2>
              <p className="leading-7 text-slate-600">
                Our vision is to build a society where humanity, dignity, and
                care reach every deserving person, and where collective efforts
                create lasting positive change.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="glass-card mt-10 rounded-2xl p-8">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Serving Humanity with Commitment
            </h2>
            <p className="leading-7 text-slate-600">
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
        <section className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-600 md:text-4xl">
            Our Supporters & Volunteers
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-7 text-slate-600">
            Our strength lies in the dedication of our supporters, volunteers,
            and community members who continuously contribute towards our
            mission.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-green-600 md:text-4xl">
              Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Dedicated individuals working together to serve humanity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {teamMembers.map((person, index) => (
              <div
                key={index}
                onClick={() => setSelected(person)}
                className="glass-card group cursor-pointer rounded-2xl p-4 text-center"
              >
                <div className="mb-3 overflow-hidden rounded-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-sm font-semibold text-slate-800">
                  {person.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {selected && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-green-400 transition"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="relative max-w-3xl w-full px-4">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />

            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selected.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
