import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl sm:text-2xl text-secondary font-serif mb-8">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
              {t.cta.button}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <a href="tel:+13438433295">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Phone className="h-5 w-5" />
                1 (343) 843-3295
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
