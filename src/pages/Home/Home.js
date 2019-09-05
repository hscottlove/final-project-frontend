import React, { Component } from 'react';
import HeroImg from './images/banner-img-1.png';
import GamingOneImg from './images/gaming-img-1.png';
import GamingTwoImg from './images/gaming-img-2.png';
import ThreeStarImg from './images/three-star-img.png';
import FourStarImg from './images/four-star-img.png';

class Home extends Component {
    render() {
        return (
            <>
                <section className="home-hero-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="div">
                                <img src={HeroImg} className="img-fluid" alt="Hero-img" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="header-section">
                    <div className="row">
                        <div className="col-md-12 text-center mt-4">
                            <h1 className="display-4">Play to Win.</h1>
                            <p className="lead">Gamers dont die they respawn</p>
                            <hr className="divider" />
                        </div>
                    </div>
                </section>

                <section className="news-section">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={GamingOneImg} className="img-fluid rounded" alt="Hero-img" />
                            </div>
                            <div className="col-md-6">
                                <h2 className="featurette-heading">Looking for a new game?</h2>
                                <p className="lead">Our community recommends.</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Counter-Strike <img src={FourStarImg} alt="star-rating-1" width="50" /></li>
                                    <li className="list-group-item">Rainbow Six Siege <img src={FourStarImg} alt="star-rating-2" width="50" /></li>
                                    <li className="list-group-item">Call of Duty <img src={FourStarImg} alt="star-rating-3" width="50" /></li>
                                    <li className="list-group-item">Overwatch <img src={ThreeStarImg} alt="star-rating-4" width="40" /></li>
                                    <li className="list-group-item">Half-Life <img src={ThreeStarImg} alt="star-rating-5" width="40" /></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-6">
                                <h1>Join our <span className="span-text">FREE</span> gaming community.</h1>
                                <p className="lead">Share your gaming experience, or discover great games apart of the Kaiju community. When you sign up for Kaiju Gaming, you will have access to a variety of features. We encourage all topics revolving around gaming! Start today and post your favorite game.</p>

                                <p className="lead">Members have access to:</p>
                                <ul>
                                    <li className="lead">Feed board</li>
                                    <li className="lead">Messaging</li>
                                    <li className="lead">Videos</li>
                                    <li className="lead">Profile</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <img src={GamingTwoImg} className="img-fluid rounded" alt="Hero-img" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default Home;