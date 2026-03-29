import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '@/assets/logo-icon.png';

export function Footer() {
  const { t } = useLanguage();

  const services = [
    t.services.business.title,
    t.services.corporate.title,
    t.services.personal.title,
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoIcon} alt="Barahona" className="w-10 h-10" />
              <span className="font-serif text-xl font-bold">
                Barahona <span className="text-secondary">Servicios Contables</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+13438433295" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  1 (343) 843-3295
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@barahonapro.com" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  info@barahonapro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Ottawa, Ontario, Canada
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} BarahonaPro. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
