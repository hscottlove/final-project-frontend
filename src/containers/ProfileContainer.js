import React, { Component } from 'react';
import ProfileImg from '../components/Profile/images/profile-img.png';
import Halo2PostImg from '../components/Profile/images/halo2.jpg';
import axios from 'axios';
// import Profile from '../components/Profile/Profile';
import { API_URL } from '../constants';


class ProfileContainer extends Component {
    state = {
        user: {},
      };
    
      componentDidMount() {
        const currentUser = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${currentUser}`, { withCredentials: true })
          .then(res => {
            console.log(res)
            this.setState({ user: res.data.data });
          })
          .catch(err => console.log(err));
      };


    render() {
        return (
            <>
                <section className="video-header">
                    <div className="row">
                        <div className="col-md-12 text-center mt-4">
                            <h1 className="display-4">Profile</h1>
                            <p className="lead">Welcome to the team!</p>
                            <hr className="divider" />
                        </div>
                    </div>
                </section>

                <section className="video-section mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <img src={ProfileImg} alt="profile-img" width="200px" className="img-thumbnail" />
                                <h3>{this.state.user.username}</h3>
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
                                {/* <Profile user={this.state.user} /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default ProfileContainer;