import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ question }) => {
    const ques = question.question;
    const { options } = question;
    console.log(ques);
    const uiQuestion = ques.slice(3, -4);
    const handleAnswers = option => {
        const correctAns = question.correctAnswer;
        if (option === correctAns) {
            toast.success('Correct Answer!!!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error('Wrong Answer !!!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    const lookCorrectAnswer = () => {
        const correctAns = question.correctAnswer;
        toast.success(correctAns, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div className="card bg-violet-800 text-white shadow-lg">
            <button onClick={lookCorrectAnswer} className='flex justify-end mr-5 my-3'> <EyeIcon className="h-6 w-6 text-white" /></button>
            <div className="card-body items-center text-center sm:py-2">

                <h2 className="card-title mb-3">{uiQuestion}</h2>
                <div className="card-actions grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {
                        options.map((option, indx) => <div onClick={() => handleAnswers(option)} key={indx} className="card lg:w-96 md:h-24 sm:w-full grid items-center px-3 glass shadow-lg image-full nav sm:flex-row sm:justify-center sm:justify-items-center text-bold btn">
                            <p>({indx + 1})  {option}</p>
                        </div>
                        )
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Question;