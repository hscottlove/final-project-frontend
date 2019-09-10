import React, { Component } from 'react';
import VideoHeroImg from './images/banner-img-2.png';

class Videos extends Component {
    render() {
        return (
            <>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add Video</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Video Name</label>
                                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputUrl">URL</label>
                                                <input type="text" className="form-control" id="exampleInputUrl" aria-describedby="urlHelp" />
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
                            <img src={VideoHeroImg} className="img-fluid test" alt="Hero-img" />
                        </div>
                    </div>
                </section>

                <section className="video-header">
                    <div className="row">
                        <div className="col-md-12 text-center mt-4">
                            <h1 className="display-4">Videos</h1>

                            <p className="lead">Checkout some of the hottest game trailers</p>
                            <hr className="divider" />
                        </div>
                    </div>
                </section>

                <section className="feed-button-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 d-flex flex-row-reverse mb-3">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add Video  <i className="fas fa-plus-circle"></i></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="video-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 game-demo">
                                <h2>Counter-Strike</h2>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="myFrame" className="embed-responsive-item" src="https://www.youtube.com/embed/edYCtaNueQY"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 game-demo">
                                <h2>Fortnite</h2>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="myFrame" className="embed-responsive-item" src="https://www.youtube.com/embed/qpKtzf5fXn4"
                                        allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-2 game-demo">
                                <h2>Call of Duty</h2>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="myFrame" className="embed-responsive-item" src="https://www.youtube.com/embed/Ou8NazRFCrg"
                                        allowFullScreen></iframe>
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