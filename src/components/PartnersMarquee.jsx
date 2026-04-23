const logos = [
  "/partners/logo1.png",
  "/partners/logo2.png",
  "/partners/logo3.PNG",
  "/partners/logo4.png",
  "/partners/logo5.png",
  "/partners/logo6.jpeg",
  "/partners/logo8.png",
  "/partners/logo9.png",
  "/partners/logo10.png",
  "/partners/logo11.png",
  "/partners/logo13.jpeg",
  "/partners/logo14.png",
  "/partners/logo15.PNG",
  "/partners/logo16.png",
  "/partners/logo17.png",
  "/partners/logo18.png",
  "/partners/logo19.png",



];

const PartnersMarquee = () => {
  return (
    <section className="overflow-hidden py-14">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-green-600 md:text-3xl">
          Our Collaborations
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Working together with trusted organizations
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 md:gap-20">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="partner"
              className="h-16 w-auto object-contain opacity-100 transition duration-300 md:h-20 lg:h-24"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
