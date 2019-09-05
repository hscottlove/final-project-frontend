import React, { Component } from 'react';
import VideoHeroImg from './images/banner-img-2.png';

class Videos extends Component {
render() {
    return (
        <>
            <section class="video-hero-section">
                <div class="row">
                    <div class="col-md-12">
                        <img src={VideoHeroImg} class="img-fluid test" alt="Hero-img" />
                    </div>
                </div>
            </section>

            <section class="video-header">
                <div class="row">
                    <div class="col-md-12 text-center mt-4">
                        <h1 class="display-4">Videos</h1>

                        <p class="lead">Checkout some of the hottest game trailers</p>
                        <hr class="divider" />
                    </div>
                </div>
            </section>

            <section class="feed-button-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 d-flex flex-row-reverse mb-3">
                            <button type="button" class="btn btn-primary">Add Video  <i class="fas fa-plus-circle"></i></button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="video-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 game-demo">
                            <h2>Counter-Strike</h2>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="myFrame" class="embed-responsive-item" src="https://www.youtube.com/embed/edYCtaNueQY"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8 offset-md-2 game-demo">
                            <h2>Fortnite</h2>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="myFrame" class="embed-responsive-item" src="https://www.youtube.com/embed/qpKtzf5fXn4"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-8 offset-md-2 game-demo">
                            <h2>Call of Duty</h2>
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="myFrame" class="embed-responsive-item" src="https://www.youtube.com/embed/Ou8NazRFCrg"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

}

export default Videos;