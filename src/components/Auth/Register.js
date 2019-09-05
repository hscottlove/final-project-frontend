import React, { Component } from 'react';

class Register extends Component {
render() {
    return (
       <>
         <>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="mt-5">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div> 
       </>
       </>
    )
}

}

export default Register;