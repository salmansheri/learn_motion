"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  const lastYRef = useRef<number>(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });
  return (
    <motion.div
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{
        duration: 0.2,
      }}
      whileHover="visible"
      className="fixed top-0 pt-3 z-10 flex w-full justify-center"
      onFocusCapture={() => setIsHidden(false)}
    >
      <nav className="flex justify-between gap-3 rounded-3xl bg-white text-black p-5 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
        <a href="#" className="bg-gray-200 text-black">
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"></path>
          </svg>

          <span className="sr-only">Home</span>
        </a>

        <a href="#">Products</a>

        <a href="#">Services</a>

        <a href="#">About</a>

        <a href="#">Contact</a>
      </nav>
    </motion.div>
  );
};

const StickNavigation = () => {
  return (
    <div>
      <Navbar />
      <div>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
        <p>
          The Importance of Curiosity Curiosity, that insatiable thirst for
          knowledge, is the engine that drives human progress. It is the spark
          that ignites innovation, fuels exploration, and fosters a deeper
          understanding of ourselves and the world around us. From the earliest
          humans gazing at the stars to modern scientists probing the mysteries
          of the universe, curiosity has been the unwavering compass guiding our
          journey of discovery. Curiosity is more than just a fleeting interest.
          It is a deep-seated yearning to understand, to unravel the
          complexities of the world and find meaning in the unknown. It compels
          us to ask questions, to challenge assumptions, and to seek out new
          perspectives. This inquisitive spirit has led to groundbreaking
          scientific breakthroughs, from the discovery of gravity to the mapping
          of the human genome. Furthermore, curiosity fosters empathy and
          understanding. By seeking to understand the experiences, perspectives,
          and beliefs of others, we cultivate empathy and build bridges of
          connection across cultures and backgrounds. When we embrace curiosity,
          we open ourselves to new ideas, challenge our own biases, and become
          more tolerant and understanding of the diverse tapestry of human
          experience. In an era of information overload, cultivating curiosity
          is more crucial than ever. It allows us to filter through the noise,
          identify what is truly important, and engage with information in a
          meaningful way. By encouraging curiosity in ourselves and in others,
          we can nurture a lifelong love of learning, foster critical thinking,
          and ultimately create a more informed and engaged society. In
          conclusion, curiosity is the driving force behind human progress, a
          catalyst for innovation, and a cornerstone of personal and societal
          growth. By embracing our innate curiosity, we can unlock our full
          potential, explore the wonders of the universe, and build a brighter
          future for all. Note: This is just a sample essay. You can customize
          it by: Choosing a different topic: Explore other subjects that
          interest you, such as technology, art, music, or social issues. Adding
          specific examples: Include real-world examples to support your
          arguments and make your essay more engaging. Developing your own
          perspective: Share your unique insights and opinions on the topic.
          Refining your writing: Edit and revise your essay to improve clarity,
          conciseness, and flow. I hope this essay provides a helpful starting
          point for your own writing!
        </p>
      </div>
    </div>
  );
};

export default StickNavigation;
