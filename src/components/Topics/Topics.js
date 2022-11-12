import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Topics = () => {
    const topics = useLoaderData().data;
    return (
        <div >
            <h2 className='text-4xl mt-16 text-violet-500 text-center font-bold'>Quiz Topics : {topics.length}</h2>
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

export default Topics;