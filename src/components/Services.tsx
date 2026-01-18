import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, TrendingUp, User, ArrowRight } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      title: t.services.business.title,
      description: t.services.business.description,
      color: 'bg-primary',
    },
    {
      icon: TrendingUp,
      title: t.services.corporate.title,
      description: t.services.corporate.description,
      color: 'bg-secondary',
    },
    {
      icon: User,
      title: t.services.personal.title,
      description: t.services.personal.description,
      color: 'bg-accent',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            {t.services.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80">
                {t.services.learnMore}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
