// components/footer.jsx
export const Footer = () => {
    return (
      // Main container: Styles apply to all sizes, with responsive adjustments
      <div className="
        mt-16 sm:mt-20 lg:mt-[6rem]                     // Reduced top margin on smaller screens
        bg-[#E5F0FF]                                   // Light blue background always
        rounded-tr-[60px] rounded-tl-[60px]           // Slightly reduced rounding for smaller screens
        lg:rounded-tr-[124px] lg:rounded-tl-[124px]     // Restore full rounding on large screens
        py-10 sm:py-14 lg:py-[5.22rem]                 // Reduced vertical padding on smaller screens
      ">
        {/* Inner container for content alignment and padding */}
        <div className="container mx-auto px-6 sm:px-8">
  
          {/* "Thanks..." text - Always visible, size adjusts */}
          <div className="
            text-xl sm:text-2xl lg:text-[2rem]           // Smaller font size on smaller screens
            font-[600] text-center tracking-tight
            text-[#1a1a1a]                              // Text color always dark
          ">
            Thanks for checking out my work.
          </div>
  
          {/* Button Container - Always centered */}
          <div className="flex justify-center">
            {/* Footer Button - Styles inherited from 'send mail' button */}
            <a
              href="mailto:jenilthummar3108@gmail.com"
              className="
                mt-6 sm:mt-8 lg:mt-[36px]                  // Keep reduced top margin for smaller screens
                inline-block                              // Ensure it behaves like a block for padding/margin
                px-[1rem] lg:px-[1.25rem]                 // Padding X from 'send mail'
                py-[0.6rem] lg:py-[0.7rem]               // Padding Y from 'send mail'
                bg-[#1b1b1b]                              // Keep dark background
                hover:bg-[#000000] transition-all        // Keep hover effect
                text-[#ffffff]                             // Keep white text
                text-[1.1rem] lg:text-[1.25rem]           // Font size from 'send mail'
                font-[550]                                // Font weight from 'send mail' (or use 500 if preferred)
                rounded-[0.5rem]                         // Keep rounding
                cursor-pointer
              "
            >
              A collaboration or a chat? {/* Button text */}
            </a>
          </div>
  
          {/* Email Address - Always visible, size adjusts */}
          <a href="mailto:jenilthummar3108@gmail.com" className="block hover:underline
            mt-6 sm:mt-8 lg:mt-[36px]                   // Reduced top margin on smaller screens
            text-center
            text-base lg:text-[1.25rem]               // Smaller font size on smaller screens
            font-[600]
            text-[#1a1a1a]                           // Text color always dark
          ">
            jenilthummar3108@gmail.com
          </a>
        </div>
      </div>
    );
  };