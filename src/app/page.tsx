import AnimatedModal from "@/components/animated-modal";
import AnimatedDropdown from "@/components/animatied-dropdown";
// import HorizontalScroll from "@/components/horizontal-scroll";
import ScrollAnimation from "@/components/scroll-animation";

export default function Home() {
       return (
    <>
      <div className="h-dvh  flex flex-col items-center justify-center">
        <h1 className="text-3xl">Animated Dropdown</h1>
        <AnimatedDropdown />
      </div>
      {/* <div className="h-dvh"> */}
      {/*   <HorizontalScroll /> */}
      {/* </div> */}
      <div className="h-dvh">
        <AnimatedModal />
      </div>
      <div className="h-[300vh]">
        <ScrollAnimation />
      </div>
    </>
  );
}
