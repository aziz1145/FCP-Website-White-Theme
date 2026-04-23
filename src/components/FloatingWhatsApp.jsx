const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* SUPPORT BUTTON */}
      <a
        href="/support"
        className="block md:hidden rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-green-500"
      >
        Support
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/923228006622"
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white text-2xl shadow-lg transition hover:bg-green-400"
      >
        💬
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
