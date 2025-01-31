import React from "react";
import { motion } from "framer-motion";
interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function AnimatedCard({
  children,
  className = "",
  delay = 0
}: AnimatedCardProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.95
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} whileHover={{
    y: -5,
    transition: {
      duration: 0.2
    }
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.4,
    delay
  }} className={className}>
      {children}
    </motion.div>;
}