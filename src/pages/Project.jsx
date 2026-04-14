import Reveal from "../components/Reveal";

const Projects = () => {
  return (
    <div className="text-white px-4 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Our Work & Initiatives
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto">
            Our work spans across multiple areas of humanitarian support,
            reflecting our commitment to serving communities in different ways.
          </p>
        </div>
      </Reveal>

      {/* Timeline Container */}
      <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-14">
        {/* Food & Basic Support */}
        <Reveal>
          <div className="relative pl-10">
            {/* Icon */}
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center text-green-400 text-lg">
              🍽
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Food & Basic Support
            </h2>

            <p className="text-white/70 text-sm md:text-base mb-4 leading-6">
              We focus on providing essential food and basic necessities to
              support families and individuals in need through organized and
              community-driven efforts.
            </p>

            <ul className="text-white/80 space-y-2 text-sm md:text-base">
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
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center text-green-400 text-lg">
              🤝
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Community Welfare & Support
            </h2>

            <p className="text-white/70 text-sm md:text-base mb-4 leading-6">
              Our welfare initiatives aim to support individuals and families
              through community-based programs and assistance in different
              situations.
            </p>

            <ul className="text-white/80 space-y-2 text-sm md:text-base">
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
            <div className="absolute -left-5 top-1 w-10 h-10 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center text-green-400 text-lg">
              🚑
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Relief & Health Services
            </h2>

            <p className="text-white/70 text-sm md:text-base mb-4 leading-6">
              We respond to emergencies and provide health-related support
              through organized relief efforts and medical initiatives across
              affected areas.
            </p>

            <ul className="text-white/80 space-y-2 text-sm md:text-base">
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
