import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            {t.testimonials.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Quote className="h-4 w-4 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 pt-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
