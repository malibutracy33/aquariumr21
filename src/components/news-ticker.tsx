// src/components/NewsTicker.jsx

"use client";
import { motion } from "framer-motion";

const NewsTicker = () => {
  const newsItem = "Breaking News: BLABLABLABLA!";

  return (
    <div className="ticker-container">
      <motion.div
        className="ticker-item"
        initial={{ x: "200%" }} // Start from the right
        animate={{ x: "-100%" }} // Move to the left
        transition={{
          duration: 20, // Adjust duration for speed
          ease: "linear",
          repeat: Infinity, // Repeat the animation indefinitely
        }}
      >
        {newsItem}
      </motion.div>
    </div>
  );
};

export default NewsTicker;
