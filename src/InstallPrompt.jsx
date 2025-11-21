import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isInStandaloneMode =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone;

  useEffect(() => {
    if (!isMobile || isInStandaloneMode) return;

    const handler = (e) => {
      e.preventDefault();
      setTimeout(() => {
        setDeferredPrompt(e);
        setShowBanner(true);
      }, 500); // small delay for smoother UX
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, [isMobile, isInStandaloneMode]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setShowBanner(false);
    }

    setDeferredPrompt(null);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/80 backdrop-blur-xl text-white rounded-xl p-4 shadow-lg border border-white/10 flex items-center justify-between animate-fade-in">
      <div>
        <h2 className="font-semibold text-lg">Install App</h2>
        <p className="text-sm text-gray-300">Add app to your home screen</p>
      </div>

      <button
        onClick={handleInstallClick}
        className="bg-white text-black px-3 py-2 rounded-lg font-medium"
      >
        Install
      </button>
    </div>
  );
}
