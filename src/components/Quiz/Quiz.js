import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const { name, questions } = quiz;
    console.log(quiz);
    return (
        <div className='my-12 bg-violet-200 mx-28 rounded-2xl'>
            <h1 className='text-3xl font-bold text-center'>Quiz on : {name}</h1>
        </div>
    );
};

export default Quiz;