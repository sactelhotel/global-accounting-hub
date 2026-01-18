import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  Calculator, 
  CreditCard, 
  TrendingUp, 
  Target,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const serviceIcons = [FileText, Users, Calculator, CreditCard, TrendingUp, Target];

export default function BusinessAccounting() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {t.businessAccounting.backHome}
            </Link>
            <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary-foreground">
              {t.businessAccounting.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 font-serif">
              {t.businessAccounting.title}
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-2">
              {t.businessAccounting.subtitle}
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl">
              {t.businessAccounting.description}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.businessAccounting.services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div 
                    key={index}
                    className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 font-serif">
              {t.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  {t.businessAccounting.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+13438433295">
                <Button variant="outline" size="lg">
                  {t.cta.phone}: 1 (343) 843-3295
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}