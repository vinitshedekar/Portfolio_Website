"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoTextAnimationProps {
  delay: number;
}

export default function RedoTextAnimation({ delay }: IRedoTextAnimationProps) {
  const textIndex = useMotionValue(0);

  const texts = [
    "I’m a skilled developer, ready to tackle any challenge!",
    "Simplicity is the ultimate sophistication in design.",
    "Debugging is like a treasure hunt, but with bugs!",
    "Responsive design is my expertise, no matter the screen size.",
    "Teamwork makes the dream work, let’s build something amazing together!",
    "Refactoring code is like decluttering your digital space.",
    "Continuous learning keeps me sharp and ready for the future.",
    "Elegant code is the hallmark of a skilled developer.",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //<motion.span className="h-32 max-w-96 bg-lightBeige text-[1.2rem] font-bold dark:bg-darkBeige md:text-[1.5rem] lg:text-[1.7rem]">
  return (
    <motion.span className="h-32 max-w-96  text-[1.2rem] font-bold md:text-[1.5rem] lg:text-[1.7rem]">
      {displayText}
    </motion.span>
  );
}
