import React from 'react';

const Footer = () => {
    return(
        <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <p className="float-right">
                <button type="button" className="btn btn-link"><i className="fas fa-angle-up"></i> Back to top</button>
              </p>
              <p>Copyright © Scott Love</p>
            </div>
          </div>
        </div>
      </footer>
    )
};

export default Footer;