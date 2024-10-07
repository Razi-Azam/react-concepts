import React from 'react'
import aboutImage from '../../assets/coding-1.png'

function About() {
    return (
        <div className="py-4 bg-purple-50">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={aboutImage}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-purple-950 font-bold md:text-4xl text-left">
                            An amazing platform for frontend developers
                        </h2>
                        <p className="mt-6 text-gray-600 text-left">
                            This platform is created to share my knowledge and experience related to software development and coding.
                        </p>
                        <p className="mt-4 text-gray-600 text-left">
                            You can watch quiz videos related to coding problems that will help you in cracking the coding interview rounds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About