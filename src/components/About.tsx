import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              {t.about.badge}
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="text-5xl lg:text-6xl font-bold text-secondary mb-2">20+</div>
              <div className="text-lg font-medium text-foreground">{t.about.years}</div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">5</div>
              <div className="text-lg font-medium text-foreground">{t.about.languages}</div>
            </div>
            <div className="col-span-2 bg-primary rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground mb-1">500+</div>
                  <div className="text-primary-foreground/80">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
