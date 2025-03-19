
import React from 'react';
import { motion } from 'framer-motion';
import { Blog } from '@/components/ui/blog-section';

const BlogSection = () => {
  return (
    <section id="blog">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Blog />
      </motion.div>
    </section>
  );
};

export default BlogSection;
