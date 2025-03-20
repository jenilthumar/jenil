export const Footer = () => {
    return (
        <div className="mt-[6rem] bg-[#E5F0FF] rounded-tr-[124px] rounded-tl-[124px] py-[5.22rem]">
            <div className="container">
                <div className="text-[2rem] font-[500] text-center tracking-tight">Thanks for checking out my work!</div>
                <div className="flex justify-center">
                    <a 
                        href="mailto:jenilthummar3108@gmail.com"
                        className="mt-[36px] rounded-[0.5rem] bg-[#1A1A1A] px-[1.5rem] py-[0.7rem] hover:opacity-80 transition-all text-[1.5rem] font-[500] text-[#F9FAFB] cursor-pointer inline-block"
                    >
                        A collaboration or a chat?
                    </a>
                </div>
                <div className="mt-[24px] text-center text-[1.25rem] font-[500]">
                    jenilthummar3108@gmail.com
                </div>
            </div>
        </div>
    );
};