import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  withContainer?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className = '',
  children,
  fullWidth = false,
  withContainer = true,
}) => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.2,
        duration: 0.4, 
        ease: 'easeOut' 
      }
    }
  };

  const Content = () => (
    <>
      {(title || subtitle) && (
        <motion.div 
          className="mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={contentVariants}
      >
        {children}
      </motion.div>
    </>
  );

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {withContainer ? (
        <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6'}>
          <Content />
        </div>
      ) : (
        <Content />
      )}
    </section>
  );
};

export default Section;