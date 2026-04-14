import { Link } from "react-router-dom";
import logo from "../assets/FCP logo.png";
import Counter from "../components/Counter";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <img
          src={logo}
          alt="FCP Logo"
          className="w-40 h-40 md:w-52 md:h-52 object-contain mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4">
          Friends Club Pakistan Welfare Foundation
        </h1>

        <p className="text-lg md:text-xl mb-2 text-white/80">
          Serving Humanity with Commitment
        </p>

        <p className="max-w-2xl text-sm md:text-base text-white/70 mb-8">
          We are committed to serving humanity across Pakistan through food
          distribution, medical camps, disaster relief, and welfare programs.
          Join us in making a real difference
        </p>

        <div className="flex gap-4">
          <Link to="/support" className="premium-btn premium-btn-primary">
            Donate Now
          </Link>

          <Link to="/contact" className="premium-btn premium-btn-outline">
            Contact Us
          </Link>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Food Distribution
            </h3>
            <p className="text-sm text-white/70">
              Providing food to deserving families across different areas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Medical Camps
            </h3>
            <p className="text-sm text-white/70">
              Organizing free medical camps and health support for those in
              need.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Disaster Relief
            </h3>
            <p className="text-sm text-white/70">
              Helping communities affected by floods and other emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              <Counter end={5000} suffix="+" />
            </h3>{" "}
            <p className="text-white/70 text-sm">Families Supported</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              <Counter end={50} suffix="+" />
            </h3>{" "}
            <p className="text-white/70 text-sm">Medical Camps</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-white mb-2">
              <Counter end={20} suffix="+" />
            </h3>{" "}
            <p className="text-white/70 text-sm">Relief Activities</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-white mb-2">Since 2005</h3>
            <p className="text-white/70 text-sm">Serving Humanity</p>
          </div>
        </div>
      </section>

      {/* Our Campaigns SECTION */}
      <Reveal>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-3">
              Featured Projects
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our key areas of work focus on supporting communities through
              essential services and welfare initiatives across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Food & Basic Support */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Food & Basic Support
              </h3>

              <p className="text-white/70 text-sm leading-6 mb-6">
                Providing essential food support including ration distribution,
                Ramadan programs, and Qurbani arrangements for deserving
                families.
              </p>

              <a
                href="/projects"
                className="premium-btn premium-btn-outline w-full"
              >
                Explore More
              </a>
            </div>

            {/* Community Welfare */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Community Welfare & Support
              </h3>

              <p className="text-white/70 text-sm leading-6 mb-6">
                Supporting individuals and families through general welfare
                initiatives, financial assistance, and community-based programs.
              </p>

              <a
                href="/projects"
                className="premium-btn premium-btn-outline w-full"
              >
                Explore More
              </a>
            </div>

            {/* Relief & Health */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Relief & Health Services
              </h3>

              <p className="text-white/70 text-sm leading-6 mb-6">
                Responding to emergencies through relief efforts, medical camps,
                and disaster support activities across affected areas.
              </p>

              <a
                href="/projects"
                className="premium-btn premium-btn-outline w-full"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* View All Button */}
          <div className="mt-10 text-center">
            <a href="/projects" className="premium-btn premium-btn-primary">
              View All Projects
            </a>
          </div>
        </section>
      </Reveal>

      {/* WHY TRUST US SECTION */}
      <Reveal>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-3">
              Why People Trust Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We focus on transparency, timely action, and real community impact
              so supporters can contribute with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Transparent Process
              </h3>
              <p className="text-white/70 text-sm leading-6">
                We aim to keep our community informed with clear campaign
                details, organized processes, and visible community work.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Timely Response
              </h3>
              <p className="text-white/70 text-sm leading-6">
                We actively participate in welfare, relief, and urgent support
                efforts wherever help is needed.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Community Focus
              </h3>
              <p className="text-white/70 text-sm leading-6">
                Our work is built around helping deserving individuals and
                families through direct community support.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                With Commitment
              </h3>
              <p className="text-white/70 text-sm leading-6">
                Our long-standing involvement in welfare activities reflects
                consistency, dedication, and public trust.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TESTIMONIALS SECTION */}
      <Reveal>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          {" "}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-3">
              What People Say
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Feedback from supporters and community members who have been part
              of our journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-white/80 text-sm leading-6 mb-5">
                “A very organized and trustworthy team. They managed Qurbani
                properly and helped many families.”
              </p>
              <h4 className="text-green-400 font-semibold text-sm">Donor</h4>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-white/80 text-sm leading-6 mb-5">
                “Their food distribution work is genuine. I personally saw how
                they supported deserving people.”
              </p>
              <h4 className="text-green-400 font-semibold text-sm">
                Volunteer
              </h4>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-white/80 text-sm leading-6 mb-5">
                “Very responsive and responsible organization. Easy to contact
                and clear communication.”
              </p>
              <h4 className="text-green-400 font-semibold text-sm">
                Supporter
              </h4>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CALL TO ACTION SECTION */}
      <Reveal>
        <section className="py-16 px-4 max-w-7xl mx-auto">
          {" "}
          <div className="max-w-5xl mx-auto bg-green-500 rounded-2xl px-6 md:px-10 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Be a Part of the Change
            </h2>

            <p className="text-black/80 max-w-2xl mx-auto mb-8">
              Your support helps us reach more families through food
              distribution, medical support, disaster relief, and other welfare
              initiatives across Pakistan
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923214067783"
                target="_blank"
                rel="noreferrer"
                className="premium-btn bg-black text-white hover:bg-white hover:text-black"
              >
                Donate via WhatsApp
              </a>

              <Link
                to="/contact"
                className="premium-btn border border-black text-black hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Home;
