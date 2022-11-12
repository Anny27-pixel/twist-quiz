import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quiz = useLoaderData().data;
    return (
        <div className=' mx-0 lg:mx-auto w-full '>
            <h1 className='text-3xl font-bold text-violet-600 text-center my-12'> Statistics of all quiz topics</h1>
            <div className='flex justify-center my-5 '>
                <BarChart width={460} height={300} data={quiz}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#8884d8" barSize={20} />
                    <ResponsiveContainer />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;