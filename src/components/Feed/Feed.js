import React, { Component } from 'react';
import FeedHeroImg from './images/banner-img-4.png';
import axios from 'axios';
import { API_URL } from '../../constants';
// import { API_URL } from '../../constants';

class Feed extends Component {
  state = {
    posts: [],
    postimage: '',
    game: '',
    description: '',
    isEditing: false,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      description: this.state.description,
      game: this.state.game,
      postimage: this.state.postimage,
    }

    axios.post('http://localhost:4000/api/v1/posts', newPost, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState(prevState => ({
          posts: [...prevState.posts, res.data.data]
        }));
      })
      .catch((error) => {
        console.log(error)
      })
  };

  // GET POSTS FROM SERVER
  componentDidMount() {
    axios.get('http://localhost:4000/api/v1/posts', { withCredentials: true })
      .then((response) => {
        console.log(response.data.data)
        this.setState({ posts: response.data.data })
      })
      .catch((error) => {
        console.log(error)
      })

  }

  deletePost = (id) => {
    axios.delete(`${API_URL}/posts/${id}`, { withCredentials: true})
    .then((res) => {
      this.setState({
        posts: this.state.posts.filter((post) => post._id !== id )
      })
      console.log('removed');
     }).then().catch(err => console.log(err))
   }

   updatePost = (event, id) => {
    // console.log(id);
    event.preventDefault();
    const editPost = {
      description: this.state.description,
      game: this.state.game,
      postimage: this.state.postimage,
    }

    axios.put(`${API_URL}/posts/${id}`, editPost, { withCredentials: true })
      .then(res => {
        console.log(res);
        
        const filteredPosts = this.state.posts.filter(post => {
          return post._id !== id;
        });

        filteredPosts.push(res.data.data);

        this.setState({
          posts: filteredPosts,
          postimage: '',
          game: '',
          description: '',
          isEditing: false,
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  editPost = (id) => {

    const foundPost = this.state.posts.find(post => {
      return post._id === id;
    });

    this.setState(prevState => ({
      postimage: foundPost.postimage,
      game: foundPost.game,
      description: foundPost.description,
      isEditing: !prevState.isEditing,
    }));
  };


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


          { this.state.posts.map(post => {
            return (
              <div key={post._id} className="row mb-5">
                <div className="col-md-8 offset-md-2">
                  <div className="card">
                    <img src={post.postimage} className="card-img-top" alt="Halo 2" />
                    <div className="card-body">
                      <h3>{post.game}</h3>
                      <p className="card-text">{post.description}</p>
                      <button onClick={()=>this.deletePost(post._id)} type="button" className="btn btn-danger mr-2">Delete</button>
                      <button onClick={() => this.editPost(post._id)} type="button" className="btn btn-secondary">
                        { this.state.isEditing ? 'Cancel' : 'Edit' }
                      </button>
                    </div>


                    { this.state.isEditing &&
                      <form onSubmit={(event) => this.updatePost(event, post._id)} className="p-3">
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
                    }


                  </div>
                </div>
              </div>
            )
          }) }
          </div>
        </section>
      </>
    )
  }
}

export default Feed;