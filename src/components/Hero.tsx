import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, TrendingUp, FileText } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {
  const { t } = useLanguage();

  const features = [
    { icon: Calculator, label: 'Personal Accounting' },
    { icon: TrendingUp, label: 'Business Services' },
    { icon: FileText, label: 'Tax Compliance' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional accounting office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">{t.hero.subtitle}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                {t.hero.cta}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button size="lg" variant="outline" className="w-full border-primary-foreground/40 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/15">
                {t.hero.ctaSecondary}
              </Button>
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              >
                <feature.icon className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
