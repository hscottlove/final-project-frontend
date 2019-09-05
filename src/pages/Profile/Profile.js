import React, { Component } from 'react';

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

            <section class="video-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <img src="./images/profile-img.png" alt="profile-img" width="200px" class="img-thumbnail" />
                            <h3>Scott L.</h3>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

}

export default Profile;