"use client";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function FadeUp({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  console.log({ isInView });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial={"hidden"}
      animate={isVisible ? "visible" : "hidden"}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
export default function AnimateOnScroll() {
  return (
    <div className="m-4 space-y-8">
      {Array.from(Array(100).keys()).map((i) => (
        <FadeUp key={i}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor
            ante a aliquet dignissim. Nunc a luctus lorem, vel consequat sem.
            Quisque a sollicitudin ante. Donec eget neque malesuada, auctor eros
            ac, accumsan felis. Morbi at rutrum elit. Quisque aliquam, velit a
            tempus pulvinar, nisi erat scelerisque nibh, id molestie ipsum risus
            non ante. Ut porttitor hendrerit mauris eget varius. In nibh tortor,
            tincidunt a purus quis, vestibulum mollis turpis. Nullam fringilla
            orci ac purus congue, eget pellentesque massa fringilla. Cras tellus
            lorem, tincidunt et mollis id, tincidunt eu velit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </FadeUp>
      ))}
    </div>
  );
}
