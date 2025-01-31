import React from "react";
import { motion } from "framer-motion";
interface PageTransitionProps {
  children: React.ReactNode;
}
export function PageTransition({
  children
}: PageTransitionProps) {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.3
  }}>
      {children}
    </motion.div>;
}