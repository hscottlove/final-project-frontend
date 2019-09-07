import React, { Component } from 'react';
import FeedHeroImg from './images/banner-img-4.png';
import Halo2PostImg from './images/halo2.jpg';

class Feed extends Component {
  state = {
    posts: [],
  }

  // GET POSTS FROM SERVER
  componentDidMount() {
    // MAKE AXIOS CALL FOR POSTS
    // SET STATE WITH RESPONSE DATA
  }

  render() {
    return (
      <>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Add Post</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputName">Game:</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Description:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Share here..."></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>

        <section className="video-hero-section">
          <div className="row">
            <div className="col-md-12">
              <img src={FeedHeroImg} className="img-fluid test" alt="Hero-img" />
            </div>
          </div>
        </section>

        <section className="video-header">
          <div className="row">
            <div className="col-md-12 text-center mt-4">
              <h1 className="display-4">Feed</h1>
              <p className="lead">Share your posts with our fellow gamers.</p>
              <hr className="divider" />
            </div>
          </div>
        </section>

        <section className="feed-button-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 d-flex flex-row-reverse mb-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add Post  <i className="fas fa-plus-circle"></i></button>
              </div>
            </div>
          </div>
        </section>

        <section className="feed-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card">
                  <img src={Halo2PostImg} className="card-img-top" alt="Halo 2" />
                  <div className="card-body">
                    <h3>Game: Halo 2</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
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