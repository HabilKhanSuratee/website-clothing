import { motion } from "motion/react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "left", className = "" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className={`text-4xl lg:text-5xl tracking-tight ${subtitle ? (centered ? "mb-6" : "mb-4") : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-brand-text-muted text-lg ${centered ? "max-w-2xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
