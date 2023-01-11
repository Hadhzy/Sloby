import { useSession } from '@supabase/auth-helpers-react';
import { motion } from 'framer-motion';
import { Audio, ThreeDots } from 'react-loader-spinner';

const WelcomePage = () => {
  const session = useSession();
  return (
    <div className="bg-sloby-tools-bg absolute top-0 w-full h-screen flex justify-center text-white items-center">
      <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
        <p className="text-3xl mb-5">
          Welcome back {session?.user.user_metadata.name}
        </p>
        <div className="flex justify-center">
          <p>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#888888"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
