import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const translations = {
  en: {
    title: 'Install Our App',
    description: 'Get quick access to Barahona Accounting Services directly from your home screen.',
    install: 'Install',
    dismiss: 'Not now',
  },
  es: {
    title: 'Instalar Nuestra App',
    description: 'Accede rápidamente a Barahona Servicios Contables desde la pantalla de inicio de tu dispositivo.',
    install: 'Instalar',
    dismiss: 'Ahora no',
  },
  fr: {
    title: 'Installer Notre App',
    description: 'Accédez rapidement à Barahona Services Comptables depuis l\'écran d\'accueil de votre appareil.',
    install: 'Installer',
    dismiss: 'Pas maintenant',
  },
};

export const PWAInstallPrompt = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowPrompt(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-md mx-4 mb-4 sm:mb-0 rounded-xl border bg-card p-6 shadow-elevated animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <Download className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-card-foreground">
              {t.title}
            </h3>
          </div>
          <button
            onClick={handleDismiss}
            className="rounded-full p-1 text-muted-foreground hover:text-card-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          {t.description}
        </p>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleDismiss}
          >
            {t.dismiss}
          </Button>
          <Button
            className="flex-1"
            onClick={handleInstall}
          >
            <Download className="h-4 w-4 mr-2" />
            {t.install}
          </Button>
        </div>
      </div>
    </div>
  );
};
