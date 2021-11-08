import React, { useEffect, useState } from 'react';
import './style.css';

function Posts({match}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect((match) => {
        fetchItem(match);
    },[])


    const fetchItem = async () => {
        setLoading(true)
        const fetchItem = await fetch(`http://localhost:3000/newsApp/${match.params.id}`)
        const data = await fetchItem.json()
        setData(data)
        setLoading(false)
    }


    return (
        <>
            {
                loading ?   (
                                <div className='d-flex align-items-center flex-column container'>
                                    <div className="card w-50 mt-5" aria-hidden="true">
                                        <div className="card-body">
                                            <h5 className="card-title placeholder-glow">
                                            <span className="placeholder col-6"></span>
                                            </h5>
                                            <p className="card-text placeholder-glow">
                                            <span className="placeholder col-7"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-4"></span>
                                            <span className="placeholder col-6"></span>
                                            <span className="placeholder col-8"></span>
                                            </p>
                                            <div tabIndex={-1} className="btn btn-primary disabled placeholder col-6"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        : 
                            (
                                <div className='d-flex align-items-center flex-column container'>
                                    <h1 className='mb-5 mt-5'>{data.title}</h1>
                                    <div className='mt-5 container-lg'>
                                        <h3>{data.body}</h3>
                                        <img className='w-50' src={data.firstImage} alt='error' />
                                        <h3>{data.body}</h3>
                                    </div>
                                </div>
                            )
            }
        </>
    )
}

export default Posts
