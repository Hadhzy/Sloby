import Navbar from './navbar';
import { motion } from 'framer-motion';
export default function Layout({ children }: { children: any }) {
  return (
    <div className="bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -500, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ease: 'easeInOut', delay: 1, duration: 1.5 }}
      >
        <Navbar className="" />
      </motion.div>
      <Navbar className="invisible !block !static" />
      <main className="select-none hs-custom relative flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
