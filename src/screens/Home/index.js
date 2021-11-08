import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import './style.css';

function Home() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
        setLoading(true);
        const response = await axios.get(
            "http://localhost:3000/newsApp"
        );
        setPosts(response.data);
        setLoading(false);
        };

        loadPosts();
    }, []);

    return (
        <>
            <div>
                <input
                    className='search'
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
                {
                    loading ? (
                        <>
                                <div className='d-flex align-items-center flex-column mt-5'>
                                    <div className="card w-50" aria-hidden="true">
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
                                <div className='d-flex align-items-center flex-column mt-5'>
                                    <div className="card w-50" aria-hidden="true">
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
                                <div className='d-flex align-items-center flex-column mt-5'>
                                    <div className="card w-50" aria-hidden="true">
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
                        </>
                        ) : (
                            posts
                            .filter((value) => {
                                if (searchTitle === "") {
                                    return value;
                                } else if (
                                    value.title.toLowerCase().includes(searchTitle.toLowerCase())
                                ) {
                                    return value;
                                }
                            })
                            .map((item) => 
                                <div className='d-flex align-items-center flex-column mt-5'>
                            
                                    <div key={item.id} className="card w-50 mb-5" >
                                        <Zoom>
                                            <img src={item.firstImage} className="card-img-top" alt="error"/>
                                        </Zoom>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.body.slice(0, 10) + "..."}</p>
                                            <Link to={`/Posts/${item.id}`} className="btn btn-primary">See More</Link>
                                        </div>
                                        </div>
                                </div>
                                )
                        )
                }
            </div>
        </>
    )
}

export default Home
