import React, { Component } from 'react';
import HeroImg from './images/banner-img-1.png';

class Home extends Component {
render() {
    return (
        <>
        <section class="home-hero-section">

        <div class="row">
          <div class="col-md-12">
            <div class="div">
              <img src={HeroImg} class="img-fluid" alt="Hero-img" />
            </div>
          </div>
        </div>
       
    
      </section>
    
      <section class="header-section">
        <div class="row">
          <div class="col-md-12 text-center mt-4">
            <h1 class="display-4">Play to Win.</h1>
            
            <p class="lead">Gamers dont die they respawn</p>
            <hr class="divider"/>
          </div>
        </div>
      </section>
    
      <section class="news-section">
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-6">
              <img src="./images/gaming-img-1.png" class="img-fluid rounded" alt="Hero-img" />
            </div>
            <div class="col-md-6">
              <h2 class="featurette-heading">Latest Games. <span class="span-text">PC</span></h2>
              <p class="lead">Looking for the latest games for the PC check this list.</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Counter-Strike <img src="images/4star.png" alt="star-rating-1" width="50" /></li>
                <li class="list-group-item">Rainbow Six Siege <img src="images/4star.png" alt="star-rating-2" width="50" /></li>
                <li class="list-group-item">Call of Duty <img src="images/3star.png" alt="star-rating-3" width="40" /></li>
                <li class="list-group-item">Overwatch <img src="images/3star.png" alt="star-rating-4" width="40" /></li>
                <li class="list-group-item">Half-Life <img src="images/1star.png" alt="star-rating-5" width="15" /></li>
              </ul>
            </div>
          </div>
    
    
    
          <div class="row mt-5">
            <div class="col-md-6">
              <h1>Join our <span class="span-text">FREE</span> gaming community.</h1>
              <p>Discover great games in the Kaiju community. When you sign up, we provide a variety of gaming content for active players seeking to share their experience!</p>
    
              <p>User who sign up have access to:</p>
              <ul>
                <li>Feed Content</li>
                <li>Message Board</li>
                <li>Videos</li>
                <li>Profile</li>
              </ul>
            </div>
            <div class="col-md-6">
              <img src="./images/gaming-img-3.png" class="img-fluid rounded" alt="Hero-img" />
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

}

export default Home;