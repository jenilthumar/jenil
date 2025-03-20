"use client";

import React, { useState } from 'react';
import {
  Deck,
  Slide,
  Box,
  FlexBox,
  FullScreen,
  Progress
} from 'spectacle';
import { motion } from "framer-motion";

// Theme for the presentation
const theme = {
  fonts: {
    header: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: '#1a1a1a',
    secondary: '#464646',
    tertiary: '#ffffff',
    quaternary: '#E6E6E6',
  },
  space: [8, 16, 24, 32, 40]
};

// Custom template for controls
const template = () => (
  <>
    <FlexBox
      position="absolute"
      bottom={0}
      right={0}
      padding="0.5em"
    >
      <Progress color="#1a1a1a" size={5} />
    </FlexBox>
    <FlexBox
      position="absolute"
      bottom={0}
      left={0}
      padding="0.5em"
    >
      <FullScreen color="#1a1a1a" size={24} />
    </FlexBox>
  </>
);

const RevealDeck = () => {
  // Track if presentation is started
  const [isStarted, setIsStarted] = useState(false);
  
  // Total number of slides
  const TOTAL_SLIDES = 15;
  
  // Generate array of slide paths with correct naming convention
  const slidePaths = Array.from({ length: TOTAL_SLIDES }, (_, i) => 
    `/rp/Frame ${i + 1}.webp`
  );

  const startPresentation = () => {
    setIsStarted(true);
  };

  const exitPresentation = () => {
    setIsStarted(false);
  };

  // Preview component that shows before starting the presentation
  if (!isStarted) {
    return (
      <motion.div 
        className="w-full mx-auto mt-8 overflow-hidden border border-[#E6E6E6] rounded-lg" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Preview thumbnail */}
          <img 
            src="/rp/Frame 1.webp" 
            alt="Presentation Preview" 
            className="w-full object-cover" 
          />
          
          {/* Overlay with play button */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity hover:bg-opacity-40">
            <motion.button 
              onClick={startPresentation}
              className="bg-[#1a1a1a] text-white py-[0.6rem] px-[1.25rem] rounded-[0.5rem] font-[400] flex items-center space-x-2 hover:opacity-80 transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span>View Presentation</span>
            </motion.button>
          </div>
        </div>
        
        {/* Caption */}
        <div className="p-4 text-center bg-white">
          <p className="text-[#1a1a1a] text-[1.25rem] font-[500]">Ripen Investor Deck</p>
          <p className="text-[#464646] text-[1rem] mt-1">Click to view the full presentation</p>
        </div>
      </motion.div>
    );
  }

  // Full presentation view
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <button 
        onClick={exitPresentation}
        className="absolute top-4 right-4 z-50 bg-[#1a1a1a] text-white rounded-[0.5rem] p-2 hover:opacity-80 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <Deck theme={theme} template={template} transitionEffect="fade">
        {slidePaths.map((path, index) => (
          <Slide key={index} backgroundColor="tertiary">
            <FlexBox 
              height="100%" 
              flexDirection="column" 
              alignItems="center" 
              justifyContent="center"
            >
              <Box 
                className="w-full h-full flex items-center justify-center"
                maxWidth="100%" 
                height="100%"
                position="relative"
              >
                <img 
                  src={path} 
                  alt={`Frame ${index + 1}`} 
                  className="max-w-full max-h-full object-contain" 
                />
              </Box>
            </FlexBox>
          </Slide>
        ))}
      </Deck>
    </div>
  );
};

export default RevealDeck;