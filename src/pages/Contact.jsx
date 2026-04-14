const Contact = () => {
  return (
    <div className="text-white">
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto">
            Get in touch with Friends Club Pakistan Welfare Foundation for
            support, collaboration, volunteering, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-white/60 mb-1">Phone / WhatsApp</p>
                <p className="text-lg font-semibold text-white">
                  +92 321 4067783
                </p>
              </div>

              <div>
                <p className="text-sm text-white/60 mb-1">Email</p>
                <p className="text-lg font-semibold text-white">
                  Info@friendsclub.org.pk
                </p>
              </div>

              <div>
                <p className="text-sm text-white/60 mb-1">Location</p>
                <p className="text-lg font-semibold text-white">
                  Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Connect on WhatsApp
            </h2>

            <p className="text-white/70 leading-7 mb-6">
              For support details, collaboration, volunteering, or general
              inquiries, connect with us directly on WhatsApp and our team will
              respond as soon as possible.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/923214067783"
                target="_blank"
                rel="noreferrer"
                className="premium-btn premium-btn-primary"
              >
                Contact on WhatsApp
              </a>

              <a
                href="mailto:Info@friendsclub.org.pk"
                className="premium-btn premium-btn-outline"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
