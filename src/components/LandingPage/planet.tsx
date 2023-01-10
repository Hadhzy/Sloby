import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export function Planet({ src, className }: { src: string; className: string }) {
  const [transform, setTransform] = useState('translate(0)');
  const multiplier = 10;

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setTransform(
        'translate(-' + x * multiplier + 'px, -' + y * multiplier + 'px)'
      );
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
    >
      <Image
        alt="Planet"
        src={src}
        className={`${className} hidden lg:block absolute z-10`}
        style={{ transform: transform }}
        width={200}
        height={200}
      />
    </motion.div>
  );
}
