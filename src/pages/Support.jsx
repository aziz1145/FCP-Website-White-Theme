const Support = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 text-slate-900">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-green-600 md:text-5xl">
          Support Us
        </h1>

        <p className="mb-8 text-slate-600 leading-7">
          We are currently preparing a better and more transparent support
          system to connect with our well-wishers and community members.
        </p>

        <div className="glass-card rounded-2xl p-8">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900">
            Coming Soon 🚧
          </h2>

          <p className="mb-6 text-sm text-slate-600 leading-6">
            Our support page is being prepared. In the meantime, you can contact
            us directly on WhatsApp for details and assistance.
          </p>

          <a
            href="https://wa.me/923214067783"
            target="_blank"
            rel="noreferrer"
            className="premium-btn premium-btn-primary"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
