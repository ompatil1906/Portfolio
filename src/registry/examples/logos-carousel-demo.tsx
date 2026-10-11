import { LogosCarousel } from "@/registry/components/logos-carousel"
import { SAMPLE_LOGOS } from "@/features/sponsor/data"

export default function LogosCarouselDemo() {
  return (
    <LogosCarousel className="w-full py-4 text-foreground">
      {SAMPLE_LOGOS.map((sponsor) => (
        <sponsor.logo key={sponsor.name} className="h-auto w-full scale-105" />
      ))}
    </LogosCarousel>
  )
}
