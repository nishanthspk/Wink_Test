import React, { useState } from 'react';
import Assets from './components/Assets';
import SelectToken from './components/SelectToken';
import EvaluateReport from './components/EvaluateReport';
import { motion, AnimatePresence } from 'framer-motion';


const App = () => {
  const [showReport, setShowReport] = useState(false); // Toggle between SelectToken and EvaluateReport
  const [selectedToken, setSelectedToken] = useState(''); // State to store selected token
  const [tokenAddress, setTokenAddress] = useState(''); // State to store entered token address

  const handleCheckClick = () => {
    setShowReport(true); // Show EvaluateReport when Check is clicked
  };

  const handleBackClick = () => {
    setShowReport(false); // Show SelectToken when Back is clicked
  };

  return (
    <div className="min-h-screen lg:h-screen bg-cover bg-center bricolage-font pb-6 bg-custom-bg jost flex justify-center items-center pt-3">
      <div className="p-3 space-y-5">
        <img className="h-[25px] w-[140px] lg:w-[200px] lg:h-[40px] mx-auto lg:mx-auto" src={Assets.QuillCheckLogo} alt="Quill Check Logo" />

        {/* AnimatePresence with mode="wait" */}
        <AnimatePresence mode="wait">
          {!showReport ? (
            <motion.div
              key="select-token"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.6 }}
            >
              {/* Pass setSelectedToken and setTokenAddress to update both in parent */}
              <SelectToken className="" onCheckClick={handleCheckClick} setSelectedToken={setSelectedToken} setTokenAddress={setTokenAddress} />
            </motion.div>
          ) : (
            <motion.div
              key="evaluate-report"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.6 }}
            >
              {/* Pass the selected token and token address to EvaluateReport */}
              <EvaluateReport onBackClick={handleBackClick} selectedToken={selectedToken} tokenAddress={tokenAddress} />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="flex justify-center text-white lg:text-lg font-light">
          Powered by <img className="lg:h-5 h-4 pl-2 mt-1 lg:pl-2" src={Assets.QuillAI} alt="QuillAI" />
        </p>
      </div>
           
    </div>
  );
};

export default App;
