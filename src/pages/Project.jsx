import Reveal from "../components/Reveal";

const projectSections = [
  {
    icon: "🍽",
    title: "Say No to Hunger",
    description:
      "We work to reduce hunger by providing food, ration support, and meal assistance to deserving families and individuals.",
    items: [
      "Ration Distribution Programs",
      "Cooked Meal Support",
      "Ramadan Food Campaigns",
      "Emergency Food Assistance",
      "Seasonal Food Drives",
    ],
  },
  {
    icon: "🤝",
    title: "Community Welfare & Support",
    description:
      "Our welfare initiatives help deserving individuals and families through community-based support and organized assistance.",
    items: [
      "Individual Assistance Cases",
      "Family Support Programs",
      "General Welfare Initiatives",
      "Financial Assistance Support",
      "Local Area Welfare Activities",
    ],
  },
  {
    icon: "🚑",
    title: "Relief & Health Services",
    description:
      "We respond to emergencies and health needs through relief work, camps, and organized support activities.",
    items: [
      "Flood Relief Activities",
      "Emergency Response Support",
      "Medical Camps",
      "Health Assistance Programs",
      "Disaster Relief Efforts",
    ],
  },
  {
    icon: "📚",
    title: "Education Support",
    description:
      "We aim to support learning and student development through educational help and youth-centered community efforts.",
    items: [
      "Student Support Programs",
      "School Supply Assistance",
      "Learning Resource Distribution",
      "Youth Motivation Activities",
      "Educational Welfare Initiatives",
    ],
  },
  {
    icon: "🩸",
    title: "Health Awareness",
    description:
      "We promote community wellbeing through awareness efforts, support drives, and organized health-related activities.",
    items: [
      "Public Health Awareness",
      "Wellness Campaigns",
      "Basic Screening Support",
      "Health Education Sessions",
      "Community Outreach Activities",
    ],
  },
  {
    icon: "🎁",
    title: "Seasonal Welfare Campaigns",
    description:
      "We organize special welfare initiatives during important seasons and times of community need.",
    items: [
      "Ramadan Dastarkhwan",
      "Qurbani Arrangements",
      "Eid Welfare Distribution",
      "Winter Support Campaigns",
      "Special Occasion Drives",
    ],
  },
  {
    icon: "🏠",
    title: "Family Assistance",
    description:
      "We support families facing hardship through direct help, coordinated welfare assistance, and essential relief.",
    items: [
      "Household Support",
      "Urgent Family Relief",
      "Needs-Based Assistance",
      "Essential Supply Support",
      "Family Care Initiatives",
    ],
  },
  {
    icon: "🌍",
    title: "Public Service Initiatives",
    description:
      "We continue working on broader community initiatives that improve wellbeing, service access, and public trust.",
    items: [
      "Community Service Projects",
      "Volunteer-Based Activities",
      "Neighborhood Welfare Support",
      "Public Benefit Programs",
      "Civic Help Initiatives",
    ],
  },
];

const Projects = () => {
  return (
    <div className="px-4 py-16 max-w-7xl mx-auto text-slate-900">
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Our Work & Initiatives
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto leading-7">
            Our work spans multiple areas of humanitarian support, reflecting
            our commitment to serving communities in practical and meaningful
            ways.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectSections.map((section, index) => (
          <Reveal key={index}>
            <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-200 bg-green-50 text-2xl text-green-600 shadow-sm">
                {section.icon}
              </div>

              <h2 className="mb-3 text-2xl font-semibold text-slate-900">
                {section.title}
              </h2>

              <p className="mb-4 text-sm leading-6 text-slate-600 md:text-base">
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
    </div>
  );
};

export default Projects;
