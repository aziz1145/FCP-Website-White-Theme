const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/923214067783"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-black px-4 py-3 rounded-full shadow-lg hover:bg-green-400 transition group"
    >
      <span className="text-lg">💬</span>

      <span className="text-sm font-semibold hidden sm:inline">
        Chat with us
      </span>

      <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20 group-hover:opacity-0"></span>
    </a>
  );
};

export default FloatingWhatsApp;