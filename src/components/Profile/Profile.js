import React, { Component } from 'react';
import ProfileImg from './images/profile-img.png';
import Halo2PostImg from './images/halo2.jpg';

class Profile extends Component {
render() {
    return (
       <>
            <section class="video-header">
                <div class="row">
                    <div class="col-md-12 text-center mt-4">
                        <h1 class="display-4">Profile</h1>
                        <p class="lead">Welcome to the team!</p>
                        <hr class="divider" />
                    </div>
                </div>
            </section>

            <section class="video-section mb-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <img src={ProfileImg} alt="profile-img" width="200px" class="img-thumbnail" />
                            <h3>Scott L.</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feed-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                <div class="card">
                                    <img src={Halo2PostImg} class="card-img-top" alt="Halo 2" />
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

export default Profile;