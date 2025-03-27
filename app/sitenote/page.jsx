"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "../animations";
import { useRouter } from "next/navigation";

import { Footer } from "@/components/footer";

const SitenotePage = () => {

    const router = useRouter();

    return (
        <div>
            <div className="flex justify-between items-center lg:max-w-[45rem] w-full mx-auto mt-[2.36rem]">
                <motion.h2
                    className="text-[2rem] font-[700] tracking-tight text-[#1a1a1a] cursor-pointer pl-2 lg:pl-0"
                    variants={fadeInUp}
                    onClick={() => router.push("/")}
                >
                    Jenil
                </motion.h2>
                <motion.div
                    className="mt-[0.5rem] text-[1.25rem] font-[400] tracking-tight"
                    variants={fadeInUp}
                >
                    <Link href={"/aboutme"}>
                        <motion.span
                            whileHover={{ color: "#666" }}
                            transition={{ duration: 0.2 }}
                        >
                            about me
                        </motion.span>
                    </Link>
                    <Link href={"https://drive.google.com/file/d/1QBjx9aQ_Ioo_DX_yH7EhKnLzRNFx6zXT/view?usp=drive_link"} className="ms-[1.5rem]">
                        <motion.span
                            whileHover={{ color: "#666" }}
                            transition={{ duration: 0.2 }}
                        >
                            resume
                        </motion.span>
                    </Link>
                    <Link href={"/"} className="ms-[1.5rem] bg-[#1a1a1a] text-white py-[0.6rem] px-[1.25rem] rounded-[0.5rem] hover:opacity-80 transition-all">
                        <motion.span
                            transition={{ duration: 0.2 }}
                        >
                            send mail
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
            <div className="mt-[3.88rem] lg:max-w-[45rem] w-full mx-auto px-2 lg:px-0">
                <motion.p
                    className="mt-[2.25rem] text-[2rem] font-[600] tracking-tight text-[#1a1a1a]"
                    style={{ lineHeight: "normal" }}
                    variants={fadeInUp}
                >
                    how can real estate businesses streamline management and communication?
                </motion.p>
                <motion.div
                    className="mt-[1.5rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className={`p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
                        whileHover={{ backgroundColor: "#d6d6d6" }}
                        transition={{ duration: 0.2 }}
                    >
                        product design
                    </motion.div>
                    <motion.div
                        className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
                        whileHover={{ backgroundColor: "#d6d6d6" }}
                        transition={{ duration: 0.2 }}
                    >
                        case study
                    </motion.div>
                </motion.div>
                <div className="mt-[2rem]">
                    <div className="flex justify-between lg:pe-[4rem] text-[1.125rem]">
                        <div>
                            <div className="text-[#464646] font-[500]">client</div>
                            <div className="text-[#1a1a1a] font-[500]">in-house product(founder)</div>
                        </div>
                        <div>
                            <div className="text-[#464646] font-[500]">model</div>
                            <div className="text-[#1a1a1a] font-[500]">enterprise, b2b</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[4rem]">
                <img src="sn/sitenote-cover-image.webp" className="max-h-[56rem] w-full object-cover" alt="" />
            </div>
            <div className="mt-[4rem] max-w-[45rem] mx-auto w-full px-2 lg:px-0">
                <div className="text-[#1a1a1a] text-[2rem] font-[600] tracking-tight">context</div>
                <div className="text-[#1a1a1a] text-[1.25rem] font-[500] mt-[1.5rem]">
                    Sitenote is a web app that helps real estate and construction builders to manage their projects and sites effectively and seamlessly by providing core features and solutions. The app helped me explore my skills in UI/UX design, research and talking with stakeholders, giving emphasis on the ability to deliver functional-intuative and user-friendly digital experiences.
                </div>
            </div>
            <div className="mt-[4rem] max-w-[45rem] mx-auto w-full">
                <img src="sn/sitenote-s-1.webp" className="max-h-[33rem] h-full w-full object-cover" alt="" />
            </div>
            <div className="max-w-[45rem] mx-auto w-full px-2 lg:px-0">
                <div className="mt-[4rem] text-[2rem] text-[#1a1a1a] font-[600] tracking-tight">problem discovery</div>
                <p className="mt-[1.5rem] text-[#1a1a1a] text-[1.25rem] font-[500]" style={{ lineHeight: "140%" }}>
                    Real estate and construction often rely on Whatsapp and calls for communication which is time-consuming and not a very reliable and effective form of communication considering many types of individuals and departments are involved to achieve a common goal.
                </p>
                <div className="mt-[1.5rem] ps-[1.5rem]">
                    <ul className="list-disc text-[1.25rem]">
                        <li className="mt-[1.5rem] text-[#1a1a1a] font-[500]" style={{ lineHeight: "140%" }}>
                            The data and information aren&apos;t available to access easily, there isn&apos;t one centralized information system in place to do so.
                        </li>
                        <li className="mt-[1.5rem] text-[#1a1a1a] font-[500]" style={{ lineHeight: "140%" }}>
                            There is also a major communication lag between office staff and on-site staff.
                        </li>
                    </ul>
                </div>
                <div className="mt-[1.5rem] flex flex-col gap-y-[1rem]">
                    <p className="text-[#1a1a1a] text-[1.25rem] font-[500] bg-[#E6E6E6] px-[0.81rem] py-[0.41rem] rounded-[2.5rem] inline w-fit">1. Whatsapp has limitations</p>
                    <p className="text-[#1a1a1a] text-[1.25rem] font-[500] bg-[#E6E6E6] px-[0.81rem] py-[0.41rem] rounded-[2.5rem] inline w-fit">2. Inefficient site-to-office coordination</p>
                    <p className="text-[#1a1a1a] text-[1.25rem] font-[500] bg-[#E6E6E6] px-[0.81rem] py-[0.41rem] rounded-[2.5rem] inline w-fit">3. Data accessibility </p>
                    <p className="text-[#1a1a1a] text-[1.25rem] font-[500] bg-[#E6E6E6] px-[0.81rem] py-[0.41rem] rounded-[2.5rem] inline w-fit">4. Scattered customer records</p>
                    <p className="text-[#1a1a1a] text-[1.25rem] font-[500] bg-[#E6E6E6] px-[0.81rem] py-[0.41rem] rounded-[2.5rem] inline w-fit">5. Lack of sales pipeline visibility</p>
                </div>
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] text-[2rem] tracking-tight">goal</div>
                    <div className="mt-[1.5rem] text-[#1a1a1a] font-[500] text-[1.25rem]">A digitally centralized and synced workspace for</div>
                    <div className="mt-[1.5rem] text-[#1a1a1a] font-[500] text-[1.25rem]">
                        <div className="text-[#1a1a1a] font-[500]">1. Centralized communication</div>
                        <div className="mt-[1rem] text-[#1a1a1a] font-[500]">2. Centralized place to store all the communication and data</div>
                    </div>
                </div>
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem]">process</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">I started the process by asking lots of questions to one of the stakeholders who is also my close uncle and has been in construction and real estate for over 20y.</div>
                </div>
                <div className="mt-[4rem]">
                    <img src="sn/sitenote-s-2.webp" className="max-h-[56rem] w-full object-cover" alt="" />
                </div>
                <p className="text-center text-[1.125rem] text-[#808080] font-[400] mt-[1rem]">This was written by me on the very first day of kick-off :)</p>
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem]">research</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">The main method of research was in-person interviews with stakeholders.</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">I had a pretty good idea about this business due to it being a popular business in our family which helped me a lot to come up with a solution initially. I continued taking interviews and talking with stakeholders throughout the project.</div>
                </div>
                <div className="mt-[4rem] p-[1.5rem] bg-[#ED6A47] rounded-[0.5rem] text-white">
                    <div className="font-[600] tracking-tight text-[1.5rem]">key findings</div>
                    <div className="mt-[2rem]">
                        <div className="flex gap-x-[1rem] text-[1.25rem] font-[550]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 22.9785C10.6167 22.9785 9.31667 22.716 8.1 22.191C6.88333 21.666 5.825 20.9535 4.925 20.0535C4.025 19.1535 3.3125 18.0952 2.7875 16.8785C2.2625 15.6618 2 14.3618 2 12.9785C2 11.5952 2.2625 10.2952 2.7875 9.07852C3.3125 7.86185 4.025 6.80352 4.925 5.90352C5.825 5.00352 6.88333 4.29102 8.1 3.76602C9.31667 3.24102 10.6167 2.97852 12 2.97852C13.3833 2.97852 14.6833 3.24102 15.9 3.76602C17.1167 4.29102 18.175 5.00352 19.075 5.90352C19.975 6.80352 20.6875 7.86185 21.2125 9.07852C21.7375 10.2952 22 11.5952 22 12.9785C22 14.3618 21.7375 15.6618 21.2125 16.8785C20.6875 18.0952 19.975 19.1535 19.075 20.0535C18.175 20.9535 17.1167 21.666 15.9 22.191C14.6833 22.716 13.3833 22.9785 12 22.9785ZM12 20.9785C14.2333 20.9785 16.125 20.2035 17.675 18.6535C19.225 17.1035 20 15.2118 20 12.9785C20 10.7452 19.225 8.85352 17.675 7.30352C16.125 5.75352 14.2333 4.97852 12 4.97852C9.76667 4.97852 7.875 5.75352 6.325 7.30352C4.775 8.85352 4 10.7452 4 12.9785C4 15.2118 4.775 17.1035 6.325 18.6535C7.875 20.2035 9.76667 20.9785 12 20.9785ZM12 18.9785C10.3333 18.9785 8.91667 18.3952 7.75 17.2285C6.58333 16.0618 6 14.6452 6 12.9785C6 11.3118 6.58333 9.89518 7.75 8.72852C8.91667 7.56185 10.3333 6.97852 12 6.97852C13.6667 6.97852 15.0833 7.56185 16.25 8.72852C17.4167 9.89518 18 11.3118 18 12.9785C18 14.6452 17.4167 16.0618 16.25 17.2285C15.0833 18.3952 13.6667 18.9785 12 18.9785ZM12 16.9785C13.1 16.9785 14.0417 16.5868 14.825 15.8035C15.6083 15.0202 16 14.0785 16 12.9785C16 11.8785 15.6083 10.9368 14.825 10.1535C14.0417 9.37018 13.1 8.97852 12 8.97852C10.9 8.97852 9.95833 9.37018 9.175 10.1535C8.39167 10.9368 8 11.8785 8 12.9785C8 14.0785 8.39167 15.0202 9.175 15.8035C9.95833 16.5868 10.9 16.9785 12 16.9785ZM12 14.9785C11.45 14.9785 10.9792 14.7827 10.5875 14.391C10.1958 13.9993 10 13.5285 10 12.9785C10 12.4285 10.1958 11.9577 10.5875 11.566C10.9792 11.1743 11.45 10.9785 12 10.9785C12.55 10.9785 13.0208 11.1743 13.4125 11.566C13.8042 11.9577 14 12.4285 14 12.9785C14 13.5285 13.8042 13.9993 13.4125 14.391C13.0208 14.7827 12.55 14.9785 12 14.9785Z" fill="white" />
                            </svg>Most users wanted to streamline communication, reduce calls and WhatsApp messages.
                        </div>
                        <div className="flex gap-x-[1rem] text-[1.25rem] font-[550] mt-[2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 21.9785L5 18.1785V12.1785L1 9.97852L12 3.97852L23 9.97852V17.9785H21V11.0785L19 12.1785V18.1785L12 21.9785ZM12 13.6785L18.85 9.97852L12 6.27852L5.15 9.97852L12 13.6785ZM12 19.7035L17 17.0035V13.2285L12 15.9785L7 13.2285V17.0035L12 19.7035Z" fill="white" />
                            </svg>Site workers had limited literacy in enterprise solutions.
                        </div>
                        <div className="flex gap-x-[1rem] text-[1.25rem] font-[550] mt-[2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M12 16.9785C13.25 16.9785 14.3125 16.541 15.1875 15.666C16.0625 14.791 16.5 13.7285 16.5 12.4785C16.5 11.2285 16.0625 10.166 15.1875 9.29102C14.3125 8.41602 13.25 7.97852 12 7.97852C10.75 7.97852 9.6875 8.41602 8.8125 9.29102C7.9375 10.166 7.5 11.2285 7.5 12.4785C7.5 13.7285 7.9375 14.791 8.8125 15.666C9.6875 16.541 10.75 16.9785 12 16.9785ZM12 15.1785C11.25 15.1785 10.6125 14.916 10.0875 14.391C9.5625 13.866 9.3 13.2285 9.3 12.4785C9.3 11.7285 9.5625 11.091 10.0875 10.566C10.6125 10.041 11.25 9.77852 12 9.77852C12.75 9.77852 13.3875 10.041 13.9125 10.566C14.4375 11.091 14.7 11.7285 14.7 12.4785C14.7 13.2285 14.4375 13.866 13.9125 14.391C13.3875 14.916 12.75 15.1785 12 15.1785ZM12 19.9785C9.56667 19.9785 7.35 19.2993 5.35 17.941C3.35 16.5827 1.9 14.7618 1 12.4785C1.9 10.1952 3.35 8.37435 5.35 7.01602C7.35 5.65768 9.56667 4.97852 12 4.97852C14.4333 4.97852 16.65 5.65768 18.65 7.01602C20.65 8.37435 22.1 10.1952 23 12.4785C22.1 14.7618 20.65 16.5827 18.65 17.941C16.65 19.2993 14.4333 19.9785 12 19.9785ZM12 17.9785C13.8833 17.9785 15.6125 17.4827 17.1875 16.491C18.7625 15.4993 19.9667 14.1618 20.8 12.4785C19.9667 10.7952 18.7625 9.45768 17.1875 8.46602C15.6125 7.47435 13.8833 6.97852 12 6.97852C10.1167 6.97852 8.3875 7.47435 6.8125 8.46602C5.2375 9.45768 4.03333 10.7952 3.2 12.4785C4.03333 14.1618 5.2375 15.4993 6.8125 16.491C8.3875 17.4827 10.1167 17.9785 12 17.9785Z" fill="white" />
                            </svg>Users preferred to access only the features they needed in the app.
                        </div>
                        <div className="flex gap-x-[1rem] text-[1.25rem] font-[550] mt-[2rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M4.99994 21.9785C4.14994 21.9785 3.54577 21.5993 3.18744 20.841C2.82911 20.0827 2.91661 19.3785 3.44994 18.7285L8.99994 11.9785V5.97852H7.99994C7.71661 5.97852 7.47911 5.88268 7.28744 5.69102C7.09577 5.49935 6.99994 5.26185 6.99994 4.97852C6.99994 4.69518 7.09577 4.45768 7.28744 4.26602C7.47911 4.07435 7.71661 3.97852 7.99994 3.97852H15.9999C16.2833 3.97852 16.5208 4.07435 16.7124 4.26602C16.9041 4.45768 16.9999 4.69518 16.9999 4.97852C16.9999 5.26185 16.9041 5.49935 16.7124 5.69102C16.5208 5.88268 16.2833 5.97852 15.9999 5.97852H14.9999V11.9785L20.5499 18.7285C21.0833 19.3785 21.1708 20.0827 20.8124 20.841C20.4541 21.5993 19.8499 21.9785 18.9999 21.9785H4.99994ZM6.99994 18.9785H16.9999L13.5999 14.9785H10.3999L6.99994 18.9785ZM4.99994 19.9785H18.9999L12.9999 12.6785V5.97852H10.9999V12.6785L4.99994 19.9785Z" fill="white" />
                            </svg>Users had no prior experience with enterprise software.
                        </div>
                    </div>
                </div>
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] text-[2rem] tracking-tight">product scope & flow</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">Sitenote includes five major features that address a wide range of user demands which are displayed as channels.</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">As previously said, not everyone uses every feature. So I decided to create three user roles with different views and set up access accordingly.</div>
                </div>
                <div className="mt-[4rem]">
                    <img src="sn/sitenote-s3.webp" className="max-h-[56rem] w-full object-cover" alt="" />
                </div>
                <div className="mt-[4rem] p-[1.5rem] bg-[#ED6A47] rounded-[0.5rem] text-white">
                    <div className="bg-white text-black flex w-fit text-[1.25rem] font-[600] tracking-tight gap-x-[0.62rem] px-[1rem] py-[0.5rem] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="mt-[2px]">
                            <path d="M6.325 21.5742L7.95 14.5492L2.5 9.82422L9.7 9.19922L12.5 2.57422L15.3 9.19922L22.5 9.82422L17.05 14.5492L18.675 21.5742L12.5 17.8492L6.325 21.5742Z" fill="#1A1A1A" />
                        </svg>key design decision
                    </div>
                    <p className="mt-[2rem] font-[500] text-[1.25rem]">
                        I chose Material Design 3 as a basis guideline system because my target audience is already familiar with it through Whatsapp and it uses MD3, so it will be easy for users to settle in starting.
                    </p>
                </div>
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem]">redefining booking and sales</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">During research, I noticed that booking and sales are aspects that can be heavily optimized by centralized communication. Booking tab will be used by Top level and office staff.</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">In booking channel, Project details, property listings, and customer information are centralized and accessible anytime, anywhere, by authorized users. Sitenote enhances visibility into the entire sales pipeline and process by consolidating all property and booking data. It maintains comprehensive customer account details and histories. The team and management can track progress through dedicated message channels within each property listing, facilitating organized and purposeful communication, eliminating misunderstandings and clutter.</div>
                </div>
            </div>
            <div className="mt-[6rem] grid lg:grid-cols-3 lg:gap-x-[4rem] lg:gap-y-[6rem] lg:max-w-[60rem] mx-auto">
                <img src="sn/sc-1.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-2.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-3.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-4.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-5.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-6.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
            </div>
            <div className="lg:max-w-[45rem] mx-auto px-2 lg:px-0">
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem]">never miss anything and be in sync with teammates</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">You can not look at app every other 5 min to check if there is activity like your teammate marking some property as sold or someone put a important update regarding some property , you can miss on lots of details, but you have to focus on actual work.</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">Solution! Activity tab, this helps users stay on line with everyone regarding things they are associated with like projects, listings etc through instant updates that took place.</div>
                </div>
                <div className="mt-[6rem]">
                    <img src="sn/sc-7.webp" className="h-[33rem] object-cover rounded-lg mx-auto" alt="" />
                </div>
                <div className="mt-[4rem]">
                    <div className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem]">tasks can be forgetful and complicated, let&apos;s make them simple and not easy to forget</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">Solution! Tasks channel is a versatile feature designed to help with creating, assigning and managing day to day tasks. It is mainly used by Admins to create and assign tasks to office and site users. It simplifies task management by providing sub features like; Progress tracking, Collaboration.</div>
                </div>
            </div>
            <div className="mt-[6rem] grid lg:grid-cols-3 lg:gap-x-[4rem] lg:gap-y-[6rem] lg:max-w-[60rem] mx-auto">
                <img src="sn/sc-8.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-9.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-10.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-11.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-12.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-13.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-14.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-15.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
                <img src="sn/sc-16.webp" className="h-[33rem] object-cover rounded-lg" alt="" />
            </div>
            <div className="lg:w-[45rem] mx-auto px-2 lg:px-0">
                <div className="text-[#1a1a1a] font-[600] tracking-tight text-[2rem] mt-[6rem]" style={{ lineHeight: "normal" }}>And some additional things like material, analytics, rent that helps a lot</div>
            </div>
            <div className="mt-[4rem]">
                <img src="sn/sc-17.webp" className="max-h-[56rem] w-full object-cover" alt="" />
            </div>
            <div className="lg:w-[45rem] mx-auto px-2 lg:px-0">
                <div className="mt-[6rem]">
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">The app is currently used daily by the Sangani group in construction and the Opera group in real estate, and it has received positive feedback.</div>
                    <div className="mt-[1.5rem] text-[1.25rem] font-[500]">The Sitenote for web launched in April 2024. As the founder who discovered and designed this product, I experienced an incredible learning journey. I particularly enjoyed the daily design demos and weekly stakeholder meetings, which significantly enhanced the app&apos;s quality by offering valuable insights into client needs and engineering challenges. Looking back, I would prioritize addressing the primary issue of booking functionality, rather than getting sidetracked by secondary features.</div>
                </div>
                <div className="mt-[6rem]" onClick={() => router.push("/veriprod")}>
                    <div className="text-[#1a1a1a] font-[600] text-[2rem] mt-[6rem]" style={{ lineHeight: "normal" }}>next project</div>
                    <img src="sn/sc-18.webp" className="mt-[2rem]" alt="" />
                    <div
                        className="mt-[2rem] text-[2rem] font-[600] tracking-tight px-[1.5rem]"
                        style={{ lineHeight: "normal" }}
                    >
                        what if you never have to remember when your products are expiring?
                    </div>
                </div>
                <motion.div
                    className="mt-[1.5rem] px-[1.5rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                        <motion.div
                            className={`p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
                            whileHover={{ backgroundColor: "#d6d6d6" }}
                            transition={{ duration: 0.2 }}
                        >
                            app design
                        </motion.div>
                        <motion.div
                            className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
                            whileHover={{ backgroundColor: "#d6d6d6" }}
                            transition={{ duration: 0.2 }}
                        >
                            showcase
                        </motion.div>
                        <motion.div
                            className={`ms-[1rem] p-[0.75rem] bg-[#f5f5f5] rounded-[3.125rem] text-[#505050] font-[500] inline`}
                            whileHover={{ backgroundColor: "#d6d6d6" }}
                            transition={{ duration: 0.2 }}
                        >
                            hobby project
                        </motion.div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default SitenotePage;