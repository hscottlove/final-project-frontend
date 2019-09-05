import React from 'react';

const Footer = () => {
    return(
        <footer>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12">
              <p class="float-right">
                <button type="button" class="btn btn-link"><i class="fas fa-angle-up"></i> Back to top</button>
                {/* <a href="#"><i class="fas fa-angle-up"></i> Back to top</a> */}
              </p>
              <p>Copyright © Scott Love</p>
            </div>
          </div>
        </div>
      </footer>
    )
};

export default Footer;