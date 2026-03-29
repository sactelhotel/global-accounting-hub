import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const p = t.privacyPolicy;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="h-8 w-8 text-secondary" />
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">{p.title}</h1>
          </div>
          <p className="text-muted-foreground mb-8">{p.lastUpdated}: 2025-01-01</p>

          <div className="space-y-8">
            {p.sections.map((section, i) => (
              <section key={i} className="prose prose-lg max-w-none">
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/" className="text-secondary hover:underline font-medium">
              ← {t.businessAccounting.backHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
