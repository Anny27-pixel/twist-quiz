import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const { name, questions } = quiz;
    console.log(quiz);
    return (
        <div className='my-12 bg-violet-200 mx-28 rounded-2xl'>
            <h1 className='text-3xl font-bold text-center'>Quiz on : {name}</h1>
            <h3 className='text-2xl font-semibold ml-12' >Number of Questions : {questions.length}</h3>
            <div>
                {
                    questions.map(question => <Question
                        key={question.id}
                        question={question}

                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;