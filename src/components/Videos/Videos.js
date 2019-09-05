import React, { Component } from 'react';
import VideoHeroImg from './images/banner-img-2.png';

class Videos extends Component {
render() {
    return (
        <>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Add Video</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="row">
          <div className="col-md-12">
            <form>
              <div class="form-group">
                <label for="exampleInputName">Video Name</label>
                <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" />
              </div>
              <div class="form-group">
                <label for="exampleInputUrl">URL</label>
                <input type="text" class="form-control" id="exampleInputUrl" aria-describedby="urlHelp" />
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
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add Video  <i class="fas fa-plus-circle"></i></button>
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