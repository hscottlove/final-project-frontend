import React, { Component } from 'react';
import FeedHeroImg from './images/banner-img-4.png';
import Halo2PostImg from './images/halo2.jpg';

class Feed extends Component {
    render() {
        return (
            <>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Add Post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="row">
          <div className="col-md-12">
            <form>
              <div class="form-group">
                <label for="exampleInputName">Game:</label>
                <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter game name" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Description</label>
                
              </div>
              <button type="submit" class="btn btn-primary">Post</button>
            </form>
          </div>
        </div> 
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>


                <section class="video-hero-section">
                    <div class="row">
                        <div class="col-md-12">
                            <img src={FeedHeroImg} class="img-fluid test" alt="Hero-img" />
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
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add Post  <i class="fas fa-plus-circle"></i></button>
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

export default Feed;