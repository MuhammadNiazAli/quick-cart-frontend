/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right"
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const dir = getDirection(event, ref.current);
    setDirection(["top", "right", "bottom", "left"][dir] as any);
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width, height, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - width / 2;
    const y = ev.clientY - top - height / 2;
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[5px]",
        className
      )}
    >
      <motion.div
        initial="initial"
        whileHover={direction}
        className="relative h-full w-full"
      >
        <motion.div
          className="absolute inset-0 bg-black/40 z-10 pointer-events-none"
          variants={overlayVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <motion.div
          variants={imageVariants}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            src={imageUrl}
            width={600}
            height={600}
            alt="feature"
            className={cn(
              "h-full w-full object-cover scale-[1.15]",
              imageClassName
            )}
          />
        </motion.div>

        <motion.div
          className={cn(
            "absolute bottom-0 left-0 z-20 w-full",
            childrenClassName
          )}
          initial={{ y: 0 }}
          whileHover={{ y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const overlayVariants = {
  initial: { opacity: 0 },
  top: { opacity: 1 },
  bottom: { opacity: 1 },
  left: { opacity: 1 },
  right: { opacity: 1 },
};

const imageVariants = {
  initial: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};
