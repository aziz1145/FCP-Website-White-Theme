import Reveal from "../components/Reveal";

const projectSections = [
  {
    title: "Say NO to Hunger Respectfully",
    description:
      "Since 2005, food support has remained one of our core areas of service. We continue working to help deserving families and individuals through respectful and organized hunger-relief efforts.",
    items: [
      "Dastarkhwan initiatives",
      "Monthly ration support",
      "Iftar arrangements",
      "Ijtimai Qurbani",
    ],
  },
  {
    title: "Community Welfare & Family Support",
    description:
      "We support families through welfare-based assistance designed to address basic needs and provide relief in times of hardship.",
    items: [
      "Panel family support",
      "Basic household needs",
      "Financial assistance cases",
      "Educational support for children",
    ],
  },
  {
    title: "Health & Medical Support",
    description:
      "Our health-related work focuses on practical support for communities through medical assistance and organized care initiatives.",
    items: [
      "Dispensary support",
      "Check-up assistance",
      "Medicine support",
      "General medical help",
    ],
  },
  {
    title: "Disaster Relief & Emergency Response",
    description:
      "We respond to major emergencies with timely relief activities aimed at supporting affected communities with dignity and care.",
    items: [
      "Flood relief efforts",
      "COVID-related support",
      "Emergency community response",
      "Need-based relief assistance",
    ],
  },
  {
    title: "Development & Community Infrastructure",
    description:
      "Along with relief and welfare work, we also contribute to community-strengthening initiatives that provide lasting benefit.",
    items: [
      "Masjid construction support",
      "Water pump installation",
      "Area-based community development",
      "Basic public service assistance",
    ],
  },
  {
    title: "Social Care & Community Outreach",
    description:
      "We extend care and support to vulnerable groups through outreach efforts that reflect our ongoing commitment to humanity.",
    items: [
      "Orphanage support",
      "Old age home outreach",
      "Community care initiatives",
      "Social welfare engagement",
    ],
  },
];

const timelineItems = [
  {
    year: "2005",
    title: "Dastarkhwan Began",
    description:
      "Our journey started with Dastarkhwan service, laying the foundation of our mission to serve humanity.",
  },
  {
    year: "2007",
    title: "Monthly Ration & Ijtimai Qurbani",
    description:
      "Support expanded to monthly ration assistance for panel families along with collective Qurbani arrangements.",
  },
  {
    year: "2009",
    title: "Iftar & Family Support",
    description:
      "Our work grew to include Iftar Dastarkhwan and broader support for panel families, including basic needs.",
  },
  {
    year: "2012",
    title: "Need-Based Assistance Cases",
    description:
      "We started handling outside support cases involving financial assistance, medical help, and other urgent needs.",
  },
  {
    year: "2021",
    title: "Masjid Construction Support",
    description:
      "A masjid construction initiative was supported in Lower Dir, KPK, as part of our community-focused development work.",
  },
  {
    year: "2024",
    title: "Dispensary Support",
    description:
      "Health support expanded through dispensary-related assistance, including check-up and medicine facilitation.",
  },
  {
    year: "2025",
    title: "Major Relief Response",
    description:
      "We continued emergency response efforts through major flood relief activities and wider humanitarian support.",
  },
];

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 text-slate-900">
      <Reveal>
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-green-600 md:text-5xl">
            Our Work & Initiatives
          </h1>

          <p className="mx-auto max-w-3xl leading-7 text-slate-600">
            Since 2005, Friends Club Pakistan Welfare Foundation has continued
            serving communities through hunger relief, family welfare, medical
            support, emergency response, and community-focused initiatives
            carried out with sincerity and commitment.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-green-600 md:text-4xl">
              Core Work Areas
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Our initiatives cover multiple areas of humanitarian and community
              support, reflecting both consistency and long-term service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projectSections.map((section, index) => (
              <Reveal key={index}>
                <div className="glass-card flex h-full flex-col rounded-2xl p-6">
                  <div className="mb-4 h-1 w-16 rounded-full bg-green-500" />

                  <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                    {section.title}
                  </h2>

                  <p className="mb-5 text-sm leading-6 text-slate-600 md:text-base">
                    {section.description}
                  </p>

                  <ul className="mt-auto space-y-2 text-sm text-slate-700 md:text-base">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-green-600 md:text-4xl">
              Our Journey Since 2005
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              A brief view of how our service has expanded over time through
              welfare, relief, and community support initiatives.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-green-200 md:block" />

            <div className="space-y-10">
              {timelineItems.map((item, index) => (
                <Reveal key={index}>
                  <div
                    className={`relative flex flex-col items-center md:flex-row ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-green-500 shadow md:block" />

                    <div
                      className={`glass-card w-full rounded-2xl p-6 md:w-[46%] ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <span className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        {item.year}
                      </span>

                      <h3 className="mb-2 text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="pb-6">
          <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-12 text-center shadow-xl md:px-10">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Serving Humanity with Commitment
            </h2>

            <p className="mx-auto mb-6 max-w-3xl leading-7 text-white/90">
              Our work continues to grow through sincere service, organized
              welfare initiatives, and practical support for communities in
              need. From hunger relief to emergency response, our mission
              remains rooted in dignity, care, and consistency.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 text-sm font-semibold text-white md:flex-row md:gap-6">
              <span>Say NO to Hunger Respectfully</span>
              <span className="hidden md:inline">•</span>
              <span>Serving Humanity with Commitment</span>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Projects;
