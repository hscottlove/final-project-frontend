import React, { Component } from 'react';
import FeedHeroImg from './images/banner-img-4.png';
import Halo2PostImg from './images/halo2.jpg';
import axios from 'axios';
import { API_URL } from '../../constants';

class Feed extends Component {
  state = {
    posts: [],
    postimage: '',
    game: '',
    description: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
   
    axios.get('http://localhost:4000/api/v1/posts')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  // GET POSTS FROM SERVER
  componentDidMount() {
  
  axios.get('http://localhost:4000/api/v1/posts')
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // MAKE AXIOS CALL FOR POSTS
  // SET STATE WITH RESPONSE DATA

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
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="postimage">Image</label>
                        <input type="postimage" id="postimage" name="postimage" value={this.state.postimage} onChange={this.handleChange} className="form-control form-control-lg" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="game">Game</label>
                        <input type="game" id="game" name="game" value={this.state.game} onChange={this.handleChange} className="form-control form-control-lg" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="description" id="description" name="description" value={this.state.description} onChange={this.handleChange} className="form-control form-control-lg" />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
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
                    <h3>{this.state.posts.game}</h3>
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