const Support = () => {
  return (
    <div className="text-white flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          Support Us
        </h1>

        <p className="text-white/70 mb-8">
          We are currently preparing a better and more transparent support
          system to connect with our well-wishers and community members.
        </p>

        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Coming Soon 🚧
          </h2>

          <p className="text-white/70 text-sm mb-6">
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
