import React, { Component } from 'react';

class Feed extends Component {
    render() {
        return (
            <>
                <section class="video-hero-section">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="./images/banner-img-4.png" class="img-fluid test" alt="Hero-img" />
                        </div>
                    </div>
                </section>

                <section class="video-header">
                    <div class="row">
                        <div class="col-md-12 text-center mt-4">
                            <h1 class="display-4">Feed</h1>
                            <p class="lead">Share your posts with our fellow gamers.</p>
                            <hr class="divider" />
                        </div>
                    </div>
                </section>

                <section class="feed-button-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 offset-md-2 d-flex flex-row-reverse mb-3">
                                <button type="button" class="btn btn-primary">Add Post  <i class="fas fa-plus-circle"></i></button>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="feed-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                <div class="card">
                                    <img src="./images/halo2.jpg" class="card-img-top" alt="Halo 2" />
                                    <div class="card-body">
                                        <h3>Game: Halo 2</h3>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
                                            accusantium recusandae iure aliquam perspiciatis mollitia obcaecati aut libero,
                                            dignissimos
                                dolorum rerum eveniet non odit molestias quasi omnis asperiores! Quod, eaque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default Feed;