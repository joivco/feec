import { ScrollReveal } from "./ScrollReveal";

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  title: string;
  subtitle?: string;
  stats: Stat[];
}

export const StatsSection = ({ title, subtitle, stats }: StatsSectionProps) => {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </ScrollReveal>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="stat-card">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};