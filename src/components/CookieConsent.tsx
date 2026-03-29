import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  const consent = t.cookieConsent;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
            <Shield className="h-6 w-6 text-secondary" />
          </div>
          <h2 className="font-serif text-xl font-bold text-foreground">{consent.title}</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          {consent.message}
        </p>

        <p className="text-sm text-muted-foreground mb-6">
          {consent.learnMore}{' '}
          <Link to="/privacy-policy" className="text-secondary hover:underline font-medium">
            {consent.privacyLink}
          </Link>{' '}
          &{' '}
          <Link to="/terms-of-service" className="text-secondary hover:underline font-medium">
            {consent.termsLink}
          </Link>
        </p>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={handleDecline}>
            {consent.decline}
          </Button>
          <Button onClick={handleAccept} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            {consent.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
