import { Navigation } from "@/components/Navigation";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StatsSection } from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Handshake, Calendar, Phone, Mail, MapPin } from "lucide-react";

// Import images
import heroImage from "@/assets/hero-education.jpg";
import healthCareImage from "@/assets/health-care.jpg";
import housingHelpImage from "@/assets/housing-help.jpg";
import donationsImage from "@/assets/donations.jpg";
import missionVisionImage from "@/assets/mission-vision.jpg";
import eventsBlogImage from "@/assets/events-blog.jpg";

export default function IndexPage() {
  const values = [
    { icon: Heart, title: "Compromiso", description: "Dedicación y responsabilidad en todas nuestras acciones para lograr el desarrollo integral de las personas." },
    { icon: Users, title: "Colaboración", description: "Fomentar el trabajo en equipo y las alianzas estratégicas con diversas organizaciones e instituciones." },
    { icon: BookOpen, title: "Innovación", description: "Promover la creatividad y la generación de nuevas ideas para mejorar la calidad educativa y el desarrollo social." },
    { icon: Handshake, title: "Inclusión", description: "Garantizar la participación y el acceso equitativo a oportunidades de desarrollo para todos, sin discriminación." },
    { icon: Heart, title: "Transparencia", description: "Actuar con honestidad y claridad en todas nuestras actividades y relaciones." },
    { icon: Users, title: "Sostenibilidad", description: "Asegurar que nuestras acciones y proyectos contribuyan al desarrollo sostenible y al bienestar de las futuras generaciones." }
  ];

  const stats = [
    { number: "500+", label: "Niños beneficiados", description: "A través de nuestros programas educativos" },
    { number: "25+", label: "Aliados estratégicos", description: "Organizaciones que trabajan con nosotros" },
    { number: "15", label: "Programas activos", description: "En diferentes áreas de desarrollo" },
    { number: "5", label: "Años de experiencia", description: "Transformando vidas y comunidades" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <ParallaxSection imageSrc={heroImage} height="h-screen">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fundación <span className="text-primary">Educar es Crecer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Promovemos el desarrollo integral de niños, niñas, jóvenes y adultos a través de alianzas estratégicas en educación y desarrollo social
          </p>
          <Button className="btn-hero text-lg">
            Conoce nuestra causa
          </Button>
        </ScrollReveal>
      </ParallaxSection>

      {/* Quienes Somos Section */}
      <section id="causa" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Quiénes Somos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Una fundación que tendrá como objeto social; Promover el desarrollo integral de niños, niñas, jóvenes y adultos a través de alianzas con organizaciones y/o instituciones que trabajan en las líneas temáticas de desarrollo socioemocional y ciudadano, competencias básicas, técnicas, transversales y para la vida.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Parallax Image */}
      <ParallaxSection imageSrc={healthCareImage} height="h-96" />

      {/* Qué Hacemos Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Qué Hacemos
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Desarrollar y ejecutar alianzas con organizaciones y/o instituciones que trabajan en las líneas temáticas de desarrollo socioemocional y ciudadano, competencias básicas, técnicas, transversales y para la vida.",
              "Brinda apoyo a organizaciones y/o proyectos dirigidos a mejorar el acceso y la calidad educativa y otros servicios complementarios.",
              "Generar, difundir, transferir e innovar conocimiento propio o de terceros para aportar a la calidad de la educación y el desarrollo integral de niños, niñas y jóvenes.",
              "Brindar apoyo técnico y metodológico a organizaciones e instituciones que trabajan en las líneas temáticas de la fundación.",
              "Promover políticas públicas y acciones que contribuyan al desarrollo integral de niños, niñas y jóvenes.",
              "Promover la articulación de esfuerzos entre los sectores educativo, salud, cultura y social, y las familias y comunidades, para el desarrollo integral de niños, niñas y jóvenes.",
              "Crear y fortalecer alianzas de cooperación con entidades nacionales e internacionales que contribuyan al logro del objeto social.",
              "Generar sinergias con entidades nacionales e internacionales a través de la suscripción de convenios con fines y objetivos comunes a la Fundación.",
              "Poder celebrar todo tipo de actos o contratos lícitos, con organizaciones públicas o privadas, autorizados por la ley y los estatutos, incluyendo consorcios y/o uniones temporales.",
              "Estar facultada para aceptar herencias o legados en los términos establecidos en la ley."
            ].map((text, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image */}
      <ParallaxSection imageSrc={housingHelpImage} height="h-96" />

      {/* Aliados Section */}
      <section id="aliados" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Aliados
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Desde la fundación educar es crecer, extendemos una cordial invitación para unir fuerzas en la creación de planes sociales destinados a poblaciones vulnerables. Nuestro compromiso con la transformación social es firme, y creemos que, con aliados como tú, podemos generar un impacto significativo y duradero.
              </p>
              <p>
                Estamos buscando colaborar con organizaciones, empresas y personas comprometidas con el bienestar social, para diseñar, financiar y ejecutar proyectos que aborden las necesidades más urgentes de aquellas comunidades que más lo necesitan.
              </p>
              
              <div className="bg-surface p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">¿Por qué ser parte de este proyecto?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Impacto Real</h4>
                    <p className="text-sm">Juntos podemos mejorar la calidad de vida de quienes se encuentran en situación de vulnerabilidad.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Visibilidad</h4>
                    <p className="text-sm">Tu organización recibirá el reconocimiento de unirse a una causa que transforma vidas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Compromiso Social</h4>
                    <p className="text-sm">Serás parte de una red de apoyo que trabaja de manera colaborativa, con valores de solidaridad e inclusión.</p>
                  </div>
                </div>
              </div>

              <p className="mt-8">
                Te invitamos a ser un aliado estratégico, aportando tus recursos, experiencia y visión para cambiar vidas. Si estás interesado en conocer más detalles o discutir cómo podemos trabajar juntos, no dudes en ponerte en contacto con nosotros.
              </p>
              <p className="font-bold text-primary text-xl">¡Juntos podemos hacer la diferencia!</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parallax Image */}
      <ParallaxSection imageSrc={missionVisionImage} height="h-96" />

      {/* Misión y Visión Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Misión y Visión
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Misión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Promover el desarrollo integral de niños, niñas, jóvenes y adultos mediante la creación de alianzas estratégicas con organizaciones e instituciones que trabajan en pro del desarrollo socioemocional y el fortalecimiento de competencias para la vida, mejorando el acceso a la calidad educativa y apoyando técnicamente a entidades afines, fomentar la articulación de familias y comunidades con el sector educación, salud, cultura y social, con el fin de contribuir al desarrollo integral y sostenible de la sociedad."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Visión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Ser una fundación líder en la promoción del desarrollo integral de niños, niñas, jóvenes y adultos, reconocida por su capacidad de generar alianzas efectivas y sostenibles que impacten positivamente en la calidad educativa y el bienestar social, ser un referente en la innovación y transferencia de conocimiento, contribuyendo a la creación de políticas públicas y acciones que favorezcan el desarrollo integral y la cohesión social."
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Valores */}
          <ScrollReveal>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Valores</h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-bold text-foreground">{value.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax Image */}
      <ParallaxSection imageSrc={donationsImage} height="h-96" />

      {/* Cómo Ayudar Section */}
      <section id="ayudar" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cómo Ayudar
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Donaciones</h3>
                  <p className="text-muted-foreground mb-6">
                    Tu contribución económica nos permite desarrollar programas y proyectos que transforman vidas.
                  </p>
                  <Button className="btn-hero w-full">Donar ahora</Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Voluntariados</h3>
                  <p className="text-muted-foreground mb-6">
                    Únete a nuestro equipo de voluntarios y comparte tu tiempo y talento con quienes más lo necesitan.
                  </p>
                  <Button className="btn-hero w-full">Ser voluntario</Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Eventos</h3>
                  <p className="text-muted-foreground mb-6">
                    Participa en nuestros eventos y actividades para apoyar nuestra causa y conocer nuestra comunidad.
                  </p>
                  <Button className="btn-hero w-full">Ver eventos</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection 
        title="Nuestro Impacto" 
        subtitle="Juntos hemos logrado generar un impacto positivo en la vida de muchas personas"
        stats={stats} 
      />

      {/* Parallax Image */}
      <ParallaxSection imageSrc={eventsBlogImage} height="h-96" />

      {/* Blog de Eventos Section */}
      <section id="blog" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Blog de Eventos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mantente al día con nuestras actividades, eventos y logros. Aquí compartimos las historias de impacto y transformación que vivimos día a día.
            </p>
            <Button className="btn-hero">Ver todos los eventos</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Información Financiera Section */}
      <section id="financiera" className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Información Financiera
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Creemos en la transparencia total. Aquí puedes consultar nuestros informes financieros y conocer cómo utilizamos los recursos para cumplir nuestra misión.
            </p>
            <Button className="btn-hero">Ver reportes financieros</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Contacto
            </h2>
            <p className="text-lg text-muted-foreground">
              ¿Tienes preguntas o quieres ser parte de nuestra causa? Contáctanos
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+57 (1) 234-5678</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">info@educarescrecer.org</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Dirección</h3>
                  <p className="text-muted-foreground">Calle 123 #45-67<br />Bogotá, Colombia</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-4">Fundación Educar es Crecer</h3>
            <p className="text-gray-300 mb-6">
              Transformando vidas a través de la educación y el desarrollo integral
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" className="text-white hover:text-primary">
                Facebook
              </Button>
              <Button variant="ghost" className="text-white hover:text-primary">
                Instagram
              </Button>
              <Button variant="ghost" className="text-white hover:text-primary">
                LinkedIn
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                © 2024 Fundación Educar es Crecer. Todos los derechos reservados.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}