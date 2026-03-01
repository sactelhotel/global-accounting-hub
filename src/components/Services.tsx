import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, Briefcase, Building2, ArrowRight, CheckCircle2, 
  ClipboardCheck, FileText, Scale, BarChart3, Shield, Search, 
  Receipt, RefreshCw 
} from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      icon: User,
      ...t.services.personal,
      color: 'bg-accent',
      iconColor: 'text-accent',
      link: '/personal-accounting',
    },
    {
      icon: Briefcase,
      ...t.services.business,
      color: 'bg-primary',
      iconColor: 'text-primary',
      link: '/business-accounting',
    },
    {
      icon: Building2,
      ...t.services.corporate,
      color: 'bg-secondary',
      iconColor: 'text-secondary',
      link: null,
    },
  ];

  const workflowIcons = [ClipboardCheck, FileText, Scale, BarChart3, Shield, Search, Receipt, RefreshCw];

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

        {/* Service Categories - the7.io inspired cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${category.color}/10 flex items-center justify-center mb-6 group-hover:${category.color}/20 transition-colors`}>
                <category.icon className={`h-7 w-7 ${category.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{category.description}</p>
              <ul className="space-y-2 mb-6">
                {category.items.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {category.link ? (
                <Link to={category.link}>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80">
                    {t.services.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              ) : (
                <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80">
                  {t.services.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              {t.services.whyChooseUs.badge}
            </Badge>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t.services.whyChooseUs.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.services.whyChooseUs.description}
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">{t.about.years}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-1">5</div>
                <div className="text-sm text-muted-foreground">{t.about.languages}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Workflow */}
        <div className="mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              {t.services.workflow.badge}
            </Badge>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t.services.workflow.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.services.workflow.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.workflow.steps.map((step, index) => {
              const Icon = workflowIcons[index] || ClipboardCheck;
              return (
                <div key={index} className="relative bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
