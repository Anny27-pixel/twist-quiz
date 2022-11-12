import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import TopicCard from '../TopicCard/TopicCard';


const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>

            <About></About>
            <h2 className='text-4xl text-violet-500 text-center font-bold my-6'>Quiz Topics : {topics.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-16 my-16'>

                {
                    topics.map(topic => <TopicCard
                        key={topic.id}
                        topic={topic}
                    ></TopicCard>)
                }
            </div>

        </div>
    );
};

export default Home;