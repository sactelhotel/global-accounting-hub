export type Language = 'en' | 'es' | 'fr';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      methodology: 'Methodology',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      title: 'Strategic Accounting Services',
      subtitle: 'Multilingual Accounting at Your Service',
      description: 'We transform your accounting into a tool for business and personal success',
      cta: 'Free Consultation',
      ctaSecondary: 'Our Services',
    },
    about: {
      badge: 'About Us',
      title: 'We Speak Your Language, Understand Your Needs',
      description: 'We specialize in providing personalized accounting solutions for individuals, precise business accounting, and a complete portfolio of business services. Additionally, we speak multiple languages, facilitating clear, reliable, and barrier-free communication.',
      years: 'Years of Experience',
      languages: 'Languages',
    },
    services: {
      badge: 'Our Expertise',
      title: 'Personalized Solutions',
      description: 'We have a team of expert accounting professionals offering solutions tailored to each client\'s specific needs. We maintain clear and transparent communication, providing detailed reports that give you complete control of your finances.',
      business: {
        title: 'Business Accounting',
        description: 'We provide comprehensive business accounting solutions, including financial statements, payroll, and tax compliance, to support data-driven decision making.',
      },
      corporate: {
        title: 'Corporate Services',
        description: 'We support your company\'s growth with financial consulting, business creation advice, and efficient accounting system setup tailored to your needs.',
      },
      personal: {
        title: 'Personal Accounting',
        description: 'We offer personalized accounting services for individuals, from daily financial management to tax filing, ensuring clarity and peace of mind in your personal finances.',
      },
      learnMore: 'Learn More',
    },
    cta: {
      title: 'Request a Free Consultation with Our Experts',
      subtitle: 'Grow Your Business Today!',
      button: 'Contact Us',
      phone: 'Call Us',
    },
    methodology: {
      badge: 'Our Methodology',
      title: 'Our approach guarantees measurable results and complete control of your finances',
      steps: [
        {
          title: 'Initial Analysis',
          description: 'We begin by evaluating your specific accounting needs in detail to fully understand your financial situation.',
        },
        {
          title: 'Personalized Strategy',
          description: 'We design a custom accounting plan aligned with your financial and business objectives.',
        },
        {
          title: 'Efficient Execution',
          description: 'We implement clear and effective accounting processes, ensuring transparency and precision at every stage.',
        },
        {
          title: 'Monitoring & Optimization',
          description: 'We provide periodic reports and proactive recommendations to continuously optimize your finances.',
        },
      ],
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'Hear from Our Satisfied Clients',
      items: [
        {
          text: 'BarahonaPro transformed the way I manage my business finances. Their multilingual team made communication seamless, and their expertise saved me thousands in taxes.',
          name: 'James Brown',
          role: 'Business Owner',
        },
        {
          text: 'Exceptional service quality! The team at BarahonaPro helped me understand my financial situation clearly and provided actionable advice that made a real difference.',
          name: 'Alexandra Swift',
          role: 'Entrepreneur',
        },
        {
          text: 'A truly remarkable experience. Their professional approach and attention to detail gave me complete confidence in managing my personal and business finances.',
          name: 'Michael Chen',
          role: 'Restaurant Owner',
        },
      ],
    },
    footer: {
      description: 'Strategic accounting services for businesses and individuals. We speak your language and understand your needs.',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    contact: {
      badge: 'Contact Us',
      title: 'Get in Touch',
      description: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        phone: 'Phone Number',
        phonePlaceholder: 'Enter your phone number',
        subject: 'Subject',
        subjectPlaceholder: 'What is this regarding?',
        message: 'Message',
        messagePlaceholder: 'Tell us how we can help you...',
        captcha: 'Security Verification',
        captchaInstruction: 'Please solve the following equation:',
        captchaPlaceholder: 'Enter the answer',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        successDescription: 'We\'ll get back to you as soon as possible.',
        error: 'Error sending message',
        errorDescription: 'Please try again later.',
        captchaError: 'Incorrect captcha answer. Please try again.',
      },
      info: {
        address: 'Address',
        addressValue: '123 Business Street, Suite 100',
        phone: 'Phone',
        email: 'Email',
        hours: 'Business Hours',
        hoursValue: 'Monday - Friday: 9:00 AM - 6:00 PM',
      },
    },
    businessAccounting: {
      badge: 'Business Accounting',
      title: 'Comprehensive Business Accounting Solutions',
      subtitle: 'Drive your business forward with precise financial management',
      description: 'Our business accounting services are designed to give you complete control over your company\'s finances, enabling data-driven decisions that fuel growth.',
      services: [
        {
          title: 'Financial Statements',
          description: 'Accurate balance sheets, income statements, and cash flow reports prepared according to accounting standards.',
        },
        {
          title: 'Payroll Management',
          description: 'Complete payroll processing including tax withholdings, benefits administration, and compliance reporting.',
        },
        {
          title: 'Tax Compliance',
          description: 'Expert preparation and filing of corporate taxes, ensuring maximum deductions and full compliance.',
        },
        {
          title: 'Accounts Payable & Receivable',
          description: 'Efficient management of your company\'s cash flow through timely invoicing and payment processing.',
        },
        {
          title: 'Financial Analysis',
          description: 'In-depth analysis of your financial data to identify trends, opportunities, and areas for improvement.',
        },
        {
          title: 'Budgeting & Forecasting',
          description: 'Strategic financial planning to help you set realistic goals and track performance.',
        },
      ],
      cta: 'Request a Consultation',
      backHome: 'Back to Home',
    },
    personalAccounting: {
      badge: 'Personal Accounting',
      title: 'Personal Financial Management Made Easy',
      subtitle: 'Take control of your personal finances with expert guidance',
      description: 'Our personal accounting services help individuals manage their finances effectively, from daily budgeting to tax planning and wealth management.',
      services: [
        {
          title: 'Tax Preparation & Filing',
          description: 'Expert preparation of personal tax returns to maximize your refunds and ensure compliance.',
        },
        {
          title: 'Financial Planning',
          description: 'Comprehensive financial planning to help you achieve your short and long-term goals.',
        },
        {
          title: 'Budgeting Assistance',
          description: 'Personalized budgeting strategies to help you manage expenses and increase savings.',
        },
        {
          title: 'Investment Tracking',
          description: 'Monitor and analyze your investment portfolio for optimal performance.',
        },
        {
          title: 'Estate Planning Support',
          description: 'Assistance with financial aspects of estate planning to protect your legacy.',
        },
        {
          title: 'Retirement Planning',
          description: 'Strategic planning to ensure a comfortable and secure retirement.',
        },
      ],
      cta: 'Get Started Today',
      backHome: 'Back to Home',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      methodology: 'Metodología',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    hero: {
      title: 'Servicios Contables Estratégicos',
      subtitle: 'Contabilidad Multilingüe a su Servicio',
      description: 'Transformamos su contabilidad en una herramienta para el éxito empresarial y personal',
      cta: 'Consulta Gratuita',
      ctaSecondary: 'Nuestros Servicios',
    },
    about: {
      badge: 'Nosotros',
      title: 'Hablamos tu Idioma, Entendemos tus Necesidades',
      description: 'Nos especializamos en brindar soluciones contables personalizadas para individuos, contabilidad empresarial precisa y un completo portafolio de servicios empresariales. Además, hablamos múltiples idiomas, lo que facilita una comunicación clara, confiable y sin barreras.',
      years: 'Años de Experiencia',
      languages: 'Idiomas',
    },
    services: {
      badge: 'Nuestras Competencias',
      title: 'Soluciones Personalizadas',
      description: 'Contamos con un equipo de profesionales expertos en contabilidad que ofrece soluciones adaptadas a las necesidades específicas de cada cliente. Mantenemos una comunicación clara y transparente, proporcionando informes detallados que le permitirán tener un control total de sus finanzas.',
      business: {
        title: 'Contabilidad Empresarial',
        description: 'Brindamos soluciones completas de contabilidad empresarial, incluyendo estados financieros, nóminas y cumplimiento fiscal, para apoyar la toma de decisiones basadas en datos reales.',
      },
      corporate: {
        title: 'Servicios Empresariales',
        description: 'Apoyamos el crecimiento de su empresa con consultoría financiera, asesoría en la creación de negocios y configuración de sistemas contables eficientes y adaptados a sus necesidades.',
      },
      personal: {
        title: 'Contabilidad Personal',
        description: 'Ofrecemos servicios contables personalizados para individuos, desde la gestión financiera diaria hasta la declaración de impuestos, garantizando claridad y tranquilidad en sus finanzas personales.',
      },
      learnMore: 'Leer Más',
    },
    cta: {
      title: 'Solicite una Consulta Gratuita con Nuestros Expertos',
      subtitle: '¡Haz Crecer Tu Negocio Hoy!',
      button: 'Contáctenos',
      phone: 'Llámenos',
    },
    methodology: {
      badge: 'Nuestra Metodología',
      title: 'Nuestro enfoque garantiza resultados medibles y un control total de sus finanzas',
      steps: [
        {
          title: 'Análisis Inicial',
          description: 'Comenzamos evaluando en detalle sus necesidades contables específicas para comprender a fondo su situación financiera.',
        },
        {
          title: 'Estrategia Personalizada',
          description: 'Diseñamos un plan contable a medida, alineado con sus objetivos financieros y comerciales.',
        },
        {
          title: 'Ejecución Eficiente',
          description: 'Implementamos procesos contables claros y efectivos, asegurando transparencia y precisión en cada etapa.',
        },
        {
          title: 'Seguimiento y Optimización',
          description: 'Proporcionamos reportes periódicos y recomendaciones proactivas para optimizar continuamente sus finanzas.',
        },
      ],
    },
    testimonials: {
      badge: 'Testimonios',
      title: 'Lo Que Dicen Nuestros Clientes',
      items: [
        {
          text: 'BarahonaPro transformó la manera en que gestiono las finanzas de mi negocio. Su equipo multilingüe hizo la comunicación fluida, y su experiencia me ahorró miles en impuestos.',
          name: 'James Brown',
          role: 'Empresario',
        },
        {
          text: '¡Calidad de servicio excepcional! El equipo de BarahonaPro me ayudó a entender mi situación financiera claramente y proporcionó consejos prácticos que hicieron una diferencia real.',
          name: 'Alexandra Swift',
          role: 'Emprendedora',
        },
        {
          text: 'Una experiencia verdaderamente notable. Su enfoque profesional y atención al detalle me dieron confianza total en la gestión de mis finanzas personales y empresariales.',
          name: 'Michael Chen',
          role: 'Dueño de Restaurante',
        },
      ],
    },
    footer: {
      description: 'Servicios contables estratégicos para empresas e individuos. Hablamos tu idioma y entendemos tus necesidades.',
      services: 'Servicios',
      contact: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
    },
    contact: {
      badge: 'Contáctenos',
      title: 'Ponte en Contacto',
      description: '¿Tienes preguntas? Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.',
      form: {
        name: 'Nombre Completo',
        namePlaceholder: 'Ingresa tu nombre completo',
        email: 'Correo Electrónico',
        emailPlaceholder: 'Ingresa tu correo electrónico',
        phone: 'Número de Teléfono',
        phonePlaceholder: 'Ingresa tu número de teléfono',
        subject: 'Asunto',
        subjectPlaceholder: '¿De qué se trata?',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
        captcha: 'Verificación de Seguridad',
        captchaInstruction: 'Por favor resuelve la siguiente ecuación:',
        captchaPlaceholder: 'Ingresa la respuesta',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        successDescription: 'Te responderemos lo antes posible.',
        error: 'Error al enviar el mensaje',
        errorDescription: 'Por favor intenta de nuevo más tarde.',
        captchaError: 'Respuesta de captcha incorrecta. Por favor intenta de nuevo.',
      },
      info: {
        address: 'Dirección',
        addressValue: '123 Calle de Negocios, Suite 100',
        phone: 'Teléfono',
        email: 'Correo',
        hours: 'Horario de Atención',
        hoursValue: 'Lunes - Viernes: 9:00 AM - 6:00 PM',
      },
    },
    businessAccounting: {
      badge: 'Contabilidad Empresarial',
      title: 'Soluciones Integrales de Contabilidad Empresarial',
      subtitle: 'Impulsa tu negocio con una gestión financiera precisa',
      description: 'Nuestros servicios de contabilidad empresarial están diseñados para darte control total sobre las finanzas de tu empresa, permitiendo decisiones basadas en datos que impulsan el crecimiento.',
      services: [
        {
          title: 'Estados Financieros',
          description: 'Balances, estados de resultados e informes de flujo de caja precisos, preparados según estándares contables.',
        },
        {
          title: 'Gestión de Nómina',
          description: 'Procesamiento completo de nómina incluyendo retenciones fiscales, administración de beneficios e informes de cumplimiento.',
        },
        {
          title: 'Cumplimiento Fiscal',
          description: 'Preparación y presentación experta de impuestos corporativos, asegurando máximas deducciones y cumplimiento total.',
        },
        {
          title: 'Cuentas por Pagar y Cobrar',
          description: 'Gestión eficiente del flujo de caja de tu empresa a través de facturación oportuna y procesamiento de pagos.',
        },
        {
          title: 'Análisis Financiero',
          description: 'Análisis profundo de tus datos financieros para identificar tendencias, oportunidades y áreas de mejora.',
        },
        {
          title: 'Presupuestos y Proyecciones',
          description: 'Planificación financiera estratégica para ayudarte a establecer metas realistas y seguir el rendimiento.',
        },
      ],
      cta: 'Solicitar Consulta',
      backHome: 'Volver al Inicio',
    },
    personalAccounting: {
      badge: 'Contabilidad Personal',
      title: 'Gestión de Finanzas Personales Simplificada',
      subtitle: 'Toma el control de tus finanzas personales con orientación experta',
      description: 'Nuestros servicios de contabilidad personal ayudan a individuos a gestionar sus finanzas efectivamente, desde presupuestos diarios hasta planificación fiscal y gestión patrimonial.',
      services: [
        {
          title: 'Preparación y Declaración de Impuestos',
          description: 'Preparación experta de declaraciones de impuestos personales para maximizar tus reembolsos y asegurar cumplimiento.',
        },
        {
          title: 'Planificación Financiera',
          description: 'Planificación financiera integral para ayudarte a alcanzar tus metas a corto y largo plazo.',
        },
        {
          title: 'Asistencia con Presupuestos',
          description: 'Estrategias de presupuesto personalizadas para ayudarte a gestionar gastos y aumentar ahorros.',
        },
        {
          title: 'Seguimiento de Inversiones',
          description: 'Monitoreo y análisis de tu portafolio de inversiones para un rendimiento óptimo.',
        },
        {
          title: 'Apoyo en Planificación Patrimonial',
          description: 'Asistencia con aspectos financieros de planificación patrimonial para proteger tu legado.',
        },
        {
          title: 'Planificación de Jubilación',
          description: 'Planificación estratégica para asegurar una jubilación cómoda y segura.',
        },
      ],
      cta: 'Comienza Hoy',
      backHome: 'Volver al Inicio',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      methodology: 'Méthodologie',
      testimonials: 'Témoignages',
      contact: 'Contact',
    },
    hero: {
      title: 'Services Comptables Stratégiques',
      subtitle: 'Comptabilité Multilingue à Votre Service',
      description: 'Nous transformons votre comptabilité en un outil de réussite professionnelle et personnelle',
      cta: 'Consultation Gratuite',
      ctaSecondary: 'Nos Services',
    },
    about: {
      badge: 'À Propos',
      title: 'Nous Parlons Votre Langue, Comprenons Vos Besoins',
      description: 'Nous nous spécialisons dans les solutions comptables personnalisées pour les particuliers, une comptabilité d\'entreprise précise et un portefeuille complet de services aux entreprises. De plus, nous parlons plusieurs langues, facilitant une communication claire, fiable et sans barrières.',
      years: 'Années d\'Expérience',
      languages: 'Langues',
    },
    services: {
      badge: 'Nos Compétences',
      title: 'Solutions Personnalisées',
      description: 'Nous disposons d\'une équipe de professionnels experts en comptabilité offrant des solutions adaptées aux besoins spécifiques de chaque client. Nous maintenons une communication claire et transparente, fournissant des rapports détaillés qui vous permettront d\'avoir un contrôle total de vos finances.',
      business: {
        title: 'Comptabilité d\'Entreprise',
        description: 'Nous fournissons des solutions complètes de comptabilité d\'entreprise, y compris les états financiers, la paie et la conformité fiscale, pour soutenir la prise de décision basée sur des données réelles.',
      },
      corporate: {
        title: 'Services aux Entreprises',
        description: 'Nous soutenons la croissance de votre entreprise avec des conseils financiers, des conseils en création d\'entreprise et la mise en place de systèmes comptables efficaces adaptés à vos besoins.',
      },
      personal: {
        title: 'Comptabilité Personnelle',
        description: 'Nous offrons des services comptables personnalisés aux particuliers, de la gestion financière quotidienne à la déclaration fiscale, garantissant clarté et tranquillité dans vos finances personnelles.',
      },
      learnMore: 'En Savoir Plus',
    },
    cta: {
      title: 'Demandez une Consultation Gratuite avec Nos Experts',
      subtitle: 'Développez Votre Entreprise Aujourd\'hui!',
      button: 'Contactez-Nous',
      phone: 'Appelez-Nous',
    },
    methodology: {
      badge: 'Notre Méthodologie',
      title: 'Notre approche garantit des résultats mesurables et un contrôle total de vos finances',
      steps: [
        {
          title: 'Analyse Initiale',
          description: 'Nous commençons par évaluer en détail vos besoins comptables spécifiques pour comprendre pleinement votre situation financière.',
        },
        {
          title: 'Stratégie Personnalisée',
          description: 'Nous concevons un plan comptable sur mesure, aligné sur vos objectifs financiers et commerciaux.',
        },
        {
          title: 'Exécution Efficace',
          description: 'Nous mettons en œuvre des processus comptables clairs et efficaces, assurant transparence et précision à chaque étape.',
        },
        {
          title: 'Suivi et Optimisation',
          description: 'Nous fournissons des rapports périodiques et des recommandations proactives pour optimiser continuellement vos finances.',
        },
      ],
    },
    testimonials: {
      badge: 'Témoignages',
      title: 'Ce Que Disent Nos Clients',
      items: [
        {
          text: 'BarahonaPro a transformé ma façon de gérer les finances de mon entreprise. Leur équipe multilingue a rendu la communication fluide, et leur expertise m\'a fait économiser des milliers en impôts.',
          name: 'James Brown',
          role: 'Chef d\'Entreprise',
        },
        {
          text: 'Qualité de service exceptionnelle! L\'équipe de BarahonaPro m\'a aidé à comprendre clairement ma situation financière et m\'a fourni des conseils pratiques qui ont fait une vraie différence.',
          name: 'Alexandra Swift',
          role: 'Entrepreneure',
        },
        {
          text: 'Une expérience vraiment remarquable. Leur approche professionnelle et leur attention aux détails m\'ont donné une confiance totale dans la gestion de mes finances personnelles et professionnelles.',
          name: 'Michael Chen',
          role: 'Propriétaire de Restaurant',
        },
      ],
    },
    footer: {
      description: 'Services comptables stratégiques pour entreprises et particuliers. Nous parlons votre langue et comprenons vos besoins.',
      services: 'Services',
      contact: 'Contact',
      followUs: 'Suivez-Nous',
      rights: 'Tous droits réservés.',
    },
    contact: {
      badge: 'Contactez-Nous',
      title: 'Entrer en Contact',
      description: 'Vous avez des questions? Nous aimerions avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dès que possible.',
      form: {
        name: 'Nom Complet',
        namePlaceholder: 'Entrez votre nom complet',
        email: 'Adresse Email',
        emailPlaceholder: 'Entrez votre adresse email',
        phone: 'Numéro de Téléphone',
        phonePlaceholder: 'Entrez votre numéro de téléphone',
        subject: 'Sujet',
        subjectPlaceholder: 'De quoi s\'agit-il?',
        message: 'Message',
        messagePlaceholder: 'Dites-nous comment nous pouvons vous aider...',
        captcha: 'Vérification de Sécurité',
        captchaInstruction: 'Veuillez résoudre l\'équation suivante:',
        captchaPlaceholder: 'Entrez la réponse',
        submit: 'Envoyer le Message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès!',
        successDescription: 'Nous vous répondrons dès que possible.',
        error: 'Erreur lors de l\'envoi du message',
        errorDescription: 'Veuillez réessayer plus tard.',
        captchaError: 'Réponse captcha incorrecte. Veuillez réessayer.',
      },
      info: {
        address: 'Adresse',
        addressValue: '123 Rue des Affaires, Suite 100',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Heures d\'Ouverture',
        hoursValue: 'Lundi - Vendredi: 9h00 - 18h00',
      },
    },
    businessAccounting: {
      badge: 'Comptabilité d\'Entreprise',
      title: 'Solutions Complètes de Comptabilité d\'Entreprise',
      subtitle: 'Propulsez votre entreprise avec une gestion financière précise',
      description: 'Nos services de comptabilité d\'entreprise sont conçus pour vous donner un contrôle total sur les finances de votre entreprise, permettant des décisions basées sur les données qui alimentent la croissance.',
      services: [
        {
          title: 'États Financiers',
          description: 'Bilans, comptes de résultat et rapports de flux de trésorerie précis, préparés selon les normes comptables.',
        },
        {
          title: 'Gestion de la Paie',
          description: 'Traitement complet de la paie incluant les retenues fiscales, l\'administration des avantages et les rapports de conformité.',
        },
        {
          title: 'Conformité Fiscale',
          description: 'Préparation et dépôt experts des impôts des sociétés, assurant un maximum de déductions et une conformité totale.',
        },
        {
          title: 'Comptes Fournisseurs et Clients',
          description: 'Gestion efficace de la trésorerie de votre entreprise grâce à une facturation et un traitement des paiements en temps opportun.',
        },
        {
          title: 'Analyse Financière',
          description: 'Analyse approfondie de vos données financières pour identifier les tendances, opportunités et domaines d\'amélioration.',
        },
        {
          title: 'Budgets et Prévisions',
          description: 'Planification financière stratégique pour vous aider à définir des objectifs réalistes et suivre les performances.',
        },
      ],
      cta: 'Demander une Consultation',
      backHome: 'Retour à l\'Accueil',
    },
    personalAccounting: {
      badge: 'Comptabilité Personnelle',
      title: 'Gestion des Finances Personnelles Simplifiée',
      subtitle: 'Prenez le contrôle de vos finances personnelles avec des conseils d\'experts',
      description: 'Nos services de comptabilité personnelle aident les particuliers à gérer efficacement leurs finances, de la budgétisation quotidienne à la planification fiscale et la gestion de patrimoine.',
      services: [
        {
          title: 'Préparation et Déclaration d\'Impôts',
          description: 'Préparation experte des déclarations d\'impôts personnelles pour maximiser vos remboursements et assurer la conformité.',
        },
        {
          title: 'Planification Financière',
          description: 'Planification financière complète pour vous aider à atteindre vos objectifs à court et long terme.',
        },
        {
          title: 'Assistance Budgétaire',
          description: 'Stratégies budgétaires personnalisées pour vous aider à gérer les dépenses et augmenter l\'épargne.',
        },
        {
          title: 'Suivi des Investissements',
          description: 'Surveillance et analyse de votre portefeuille d\'investissements pour une performance optimale.',
        },
        {
          title: 'Soutien à la Planification Successorale',
          description: 'Assistance pour les aspects financiers de la planification successorale pour protéger votre héritage.',
        },
        {
          title: 'Planification de la Retraite',
          description: 'Planification stratégique pour assurer une retraite confortable et sécurisée.',
        },
      ],
      cta: 'Commencer Aujourd\'hui',
      backHome: 'Retour à l\'Accueil',
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}