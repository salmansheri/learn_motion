import Link from "next/link";
import AnimateOnScroll from "./components/animate-on-scroll";
import { MarketingHomepageComponent } from "./components/templates/marketing-app";

export default function Home() {
  return (
    <>
      <Link href="/scroll-animation">Scroll animation</Link>
      <Link href="/testimonials">testimonials</Link>
      <Link href="/accordion">accordion</Link>
    </>
  );
}
