// components/footer.jsx
export const Footer = () => {
    return (
      // Main container: Styles apply to all sizes, with responsive adjustments
      <div className="
        mt-16 sm:mt-20 lg:mt-[6rem]                     // Reduced top margin on smaller screens
        bg-[#E5F0FF]                                   // Light blue background always
        rounded-tr-[60px] rounded-tl-[60px]           // Slightly reduced rounding for smaller screens (adjust as needed)
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
            <a
              href="mailto:jenilthummar3108@gmail.com"
              className="
                mt-6 sm:mt-8 lg:mt-[36px]                  // Reduced top margin on smaller screens
                rounded-[0.5rem] bg-[#1b1b1b]
                px-4 sm:px-5 lg:px-[1.5rem]               // Reduced horizontal padding on smaller screens
                py-2 sm:py-2.5 lg:py-[0.7rem]             // Reduced vertical padding on smaller screens
                hover:bg-[#000000] transition-all
                text-base sm:text-lg lg:text-[1.5rem]     // Smaller font size on smaller screens
                font-[500] text-[#ffffff] cursor-pointer
                inline-block
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
            underline
          ">
            jenilthummar3108@gmail.com
          </a>
        </div>
      </div>
    );
  };