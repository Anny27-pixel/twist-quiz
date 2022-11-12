import React from 'react';

const TopicCard = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question : {total}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicCard;