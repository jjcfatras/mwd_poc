import { Container } from "@repo/ui/components/Container";

export const HeroSkeleton = () => (
  <div className="flex min-h-[584px] md:min-h-[568px]">
    <Container>
      <div className="grid w-full animate-pulse grid-cols-2 gap-10">
        <div className="grid items-center gap-10">
          <div className="grid gap-4">
            <span className="bg-outline/60 h-12 rounded" />
            <span className="bg-outline/60 h-12 rounded" />
            <span className="bg-outline/60 h-12 rounded" />
          </div>
          <div className="grid gap-4">
            <span className="bg-outline/60 h-8 rounded" />
            <span className="bg-primary/60 h-14 w-1/3 rounded" />
          </div>
        </div>
        <div className="grid h-full justify-items-center">
          <div className="bg-outline/60 h-full w-4/5 rounded" />
        </div>
      </div>
    </Container>
  </div>
);
