import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

export function Methodology() {
  const { t } = useLanguage();

  return (
    <section id="methodology" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            {t.methodology.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.methodology.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.methodology.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < t.methodology.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-4" />
              )}
              
              <div className="relative">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6">
                  {index + 1}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
