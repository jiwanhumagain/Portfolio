'use client'
import React, {useState } from 'react';
import Marquee from 'react-fast-marquee';

const Skills = ['Web Design', 'Backend Development', 'Frontend Development', 'App Development', 'Cloud Deployment',"React", "Node.js", "JavaScript", "CSS", "HTML"];

const SkillMarquee = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const handleMouseEnter = () => {
        setIsPlaying(false); 
    };

    const handleMouseLeave = () => {
        setIsPlaying(true); 
    };

    return (
        <div className="w-full h-24 bg-green-400 overflow-hidden flex items-center justify-center">
            <Marquee play={isPlaying}>
                <div className="flex space-x-8">
                    {Skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-white font-bold text-2xl">{skill}</span>
                            {index < Skills.length && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex space-x-8">
                    {Skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="text-white font-bold text-2xl">{skill}</span>
                            {index < Skills.length && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10 text-black"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default SkillMarquee;
