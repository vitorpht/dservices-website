import { Container } from "@/components/ui/container";
import { servicesPage } from "@/data/services-page";

function ServicesPageHero() {
  return (
    <section className="bg-surface">
      <Container className="pb-2 pt-10 sm:pb-4 sm:pt-14 lg:pt-16">
        <h1 className="typo-h1 text-primary">{servicesPage.title}</h1>
        <p className="mt-3 max-w-xl typo-body text-muted">
          {servicesPage.description}
        </p>
      </Container>
    </section>
  );
}

export { ServicesPageHero };
