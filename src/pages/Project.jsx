import Reveal from "../components/Reveal";

const Projects = () => {
  return (
    <div className="px-4 py-16 max-w-6xl mx-auto text-slate-900">
      {/* Header */}
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Our Work & Initiatives
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto leading-7">
            Our work spans across multiple areas of humanitarian support,
            reflecting our commitment to serving communities in different ways.
          </p>
        </div>
      </Reveal>

      {/* Timeline Container */}
      <div className="relative ml-4 space-y-14 border-l border-slate-200 md:ml-10">
        {/* Food & Basic Support */}
        <Reveal>
          <div className="relative pl-10">
            <div className="absolute -left-5 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-green-50 text-lg text-green-600 shadow-sm">
              🍽
            </div>

            <h2 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
              Food & Basic Support
            </h2>

            <p className="mb-4 text-sm leading-6 text-slate-600 md:text-base">
              We focus on providing essential food and basic necessities to
              support families and individuals in need through organized and
              community-driven efforts.
            </p>

            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              <li>• Food Distribution Initiatives</li>
              <li>• Ration Support Programs</li>
              <li>• Ramadan Dastarkhwan Arrangements</li>
              <li>• Collective Qurbani Support</li>
              <li>• Eid Welfare Distribution</li>
            </ul>
          </div>
        </Reveal>

        {/* Community Welfare */}
        <Reveal>
          <div className="relative pl-10">
            <div className="absolute -left-5 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-green-50 text-lg text-green-600 shadow-sm">
              🤝
            </div>

            <h2 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
              Community Welfare & Support
            </h2>

            <p className="mb-4 text-sm leading-6 text-slate-600 md:text-base">
              Our welfare initiatives aim to support individuals and families
              through community-based programs and assistance in different
              situations.
            </p>

            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              <li>• Individual Assistance Cases</li>
              <li>• Family Support Programs</li>
              <li>• Community Welfare Initiatives</li>
              <li>• General Support Activities</li>
              <li>• Local Area Assistance</li>
            </ul>
          </div>
        </Reveal>

        {/* Relief & Health */}
        <Reveal>
          <div className="relative pl-10">
            <div className="absolute -left-5 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-green-50 text-lg text-green-600 shadow-sm">
              🚑
            </div>

            <h2 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
              Relief & Health Services
            </h2>

            <p className="mb-4 text-sm leading-6 text-slate-600 md:text-base">
              We respond to emergencies and provide health-related support
              through organized relief efforts and medical initiatives across
              affected areas.
            </p>

            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              <li>• Flood Relief Activities</li>
              <li>• Emergency Response Support</li>
              <li>• Medical Camps</li>
              <li>• Health Support Initiatives</li>
              <li>• Disaster Relief Efforts</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;
