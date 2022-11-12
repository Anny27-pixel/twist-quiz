import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question : {total}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/topic/${id}`}> <button className="btn  bg-violet-600 text-white font-bold">Start Quiz </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;