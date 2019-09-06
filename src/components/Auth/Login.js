import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
render() {
    return (
       <>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="mt-5">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div> 
       </>
    )
}

}

export default Login;