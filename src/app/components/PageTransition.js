// "use client";
// import { motion } from "framer-motion";

// export default function PageTransition({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -10 }}
//       transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // "Anticipate" easing
//     >
//       {children}
//     </motion.div>
//   );
// }









"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageTransition({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page-transition"
        initial={{ opacity: 0, y: 15 }}
        // If not mounted, we force opacity 1 to ensure content is visible 
        // even if JS fails or delays.
        animate={mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1],
          // This ensures children (like your product grid) start 
          // their animations after the page container is ready.
          when: "beforeChildren" 
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}