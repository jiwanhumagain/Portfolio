import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import sendFormDetail from '../app/api/api';

export default function Contact() {
    const ContactDetails = [
        { icon: PhoneIcon, detail: '+9779849132125' },
        { icon: EmailIcon, detail: 'jeevanhumagain@gmail.com' },
        { icon: LinkedInIcon, detail: 'Jiwan Humagain' },
        { icon: FmdGoodIcon, detail: 'Panauti-4, Kavre' },
    ];

    // Use media query to determine screen size
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await sendFormDetail(formData);
        alert("Form submitted successfully!");
        console.log("clicked")

    };

    return (
        <div className="flex flex-col lg:flex-row w-full bg-purple-700 px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
            {/* Left Section */}
            <div className="flex flex-col gap-y-8 lg:gap-y-20 w-full lg:w-[40%]">
                <div className="flex flex-col gap-y-4 lg:gap-y-6 items-start justify-center relative">
                    <div className="text-white font-sans text-2xl lg:text-3xl flex font-medium tracking-wide">
                        <span className="text-green-400">-</span>
                        <span className="ml-2">Contact Us</span>
                    </div>

                    {/* Background Text */}
                    <div className="absolute -top-12 lg:-top-20 left-0 w-full overflow-hidden">
                        <span className="font-enfonix font-extrabold text-white text-5xl lg:text-9xl opacity-5 tracking-widest scale-x-125 wave-animation whitespace-nowrap">
                            Contact Us
                        </span>
                    </div>

                    {/* Main Title */}
                    <div className="text-white font-sans text-4xl sm:text-5xl lg:text-7xl flex flex-col font-semibold mt-4">
                        <div className="flex flex-wrap gap-2 lg:gap-4">
                            <span>Let's</span>
                            <span className="text-green-400">Connect</span>
                            <span>&</span>
                        </div>
                        <span className="text-green-400">Collaborate</span>
                    </div>

                    <div className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl">
                        Do contact if you have any inquery related to anything you want.
                    </div>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-6 lg:gap-8">
                    {ContactDetails.map((item, index) => (
                        <div className="flex gap-4 lg:gap-6 items-center" key={index}>
                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center flex-shrink-0">
                                <item.icon fontSize={isLargeScreen ? 'large' : 'medium'} />
                            </div>
                            <div className="text-xl sm:text-2xl lg:text-4xl text-white break-all">{item.detail}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section - Form */}
            <form className="flex flex-col w-full lg:w-[60%] lg:pl-20 mt-12 lg:mt-0 gap-6 lg:gap-8">

                {/* <div > */}
                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="w-full">
                        <input type="text" name="fName" value={formData.fName} onChange={handleChange} required
                            className="w-full h-14 lg:h-16 bg-purple-200 rounded-3xl text-lg lg:text-2xl px-6 placeholder-white"
                            placeholder="First Name *"
                        />
                    </div>
                    <div className="w-full">
                        <input type="text" name="lName" value={formData.lName} onChange={handleChange} required
                            className="w-full h-14 lg:h-16 bg-purple-200 rounded-3xl text-lg lg:text-2xl px-6 placeholder-white"
                            placeholder="Last Name *"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div className="w-full">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                            className="w-full h-14 lg:h-16 bg-purple-200 rounded-3xl text-lg lg:text-2xl px-6 placeholder-white"
                            placeholder="Email *"
                        />
                    </div>
                    <div className="w-full">
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                            className="w-full h-14 lg:h-16 bg-purple-200 rounded-3xl text-lg lg:text-2xl px-6 placeholder-white"
                            placeholder="Phone Number "
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className="w-full">
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                        className="w-full h-14 lg:h-16 bg-purple-200 rounded-3xl text-lg lg:text-2xl px-6 placeholder-white"
                        placeholder="Subject *"
                    />
                </div>

                {/* Message */}
                <div className="w-full">
                    <textarea name="message" value={formData.message} onChange={handleChange} required
                        className="w-full h-40 bg-purple-200 rounded-3xl text-lg lg:text-2xl p-6 placeholder-white placeholder-opacity-75 resize-none"
                        placeholder="Message *"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full flex justify-start mt-4" type="submit" onClick={handleSubmit}>
                    <div className="h-14 sm:h-16 lg:h-20 w-full sm:w-72 bg-white rounded-full flex items-center p-1.5 gap-2">
                        <div className="h-full aspect-square rounded-full bg-purple-700 flex justify-center items-center">
                            <ArrowForwardIcon
                                className="text-white"
                                fontSize={isLargeScreen ? 'large' : 'medium'}
                            />
                        </div>
                        <div className="flex-grow h-full">
                            <div className="w-full h-full rounded-full bg-green-500 flex justify-center items-center">
                                <span className="text-black font-semibold text-lg sm:text-xl lg:text-2xl">Send Message</span>
                            </div>
                        </div>
                    </div>
                </button>

                {/* </div> */}
            </form>
        </div>
    );
}
