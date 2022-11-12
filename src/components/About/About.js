import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-violet-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/6grvpS5/aboutImg.png" alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">About Twist Quiz!!!</h1>
                    <p className="py-6">Twist Quiz is a online quiz base website. Using Twist Quiz You can judge your knowledge. <br /> You can participate a particular quiz in the quiz topics. <br /> you can Also see the right answer.</p>
                    <button className="btn bg-violet-600 text-white font-bold">Learn More...</button>
                </div>
            </div>
        </div>
    );
};

export default About;


