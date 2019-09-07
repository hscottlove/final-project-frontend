// import React, { Component } from 'react';
// import axios from 'axios';

// class Login extends Component {
// render() {
//     return (
//        <>
//         <div className="row">
//           <div className="col-md-4 offset-md-4">
//             <form className="mt-5">
//               <div class="form-group">
//                 <label for="exampleInputEmail1">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//               </div>
//               <div class="form-group">
//                 <label for="exampleInputPassword1">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//               </div>
//               <button type="submit" class="btn btn-primary">Login</button>
//             </form>
//           </div>
//         </div> 
//        </>
//     )
// }

// }

// export default Login;


import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    axios.post(`${API_URL}/auth/login`, user, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        this.props.setCurrentUser(res.data.id);
        this.props.history.push('/profile');
      })
      .catch(err => {
        // console.log(err.response);
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <div className="row">
        {this.state.error && (
          <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}} role="alert">
            {this.state.error}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <section id="login" className="col-md-4 offset-md-4">
          <h2 className="mb-4 mt-4">Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Password</label>
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
            </div>
            <button type="submit" className="btn btn-primary float-right">Login</button>
          </form>
        </section>
      </div>
    );
  };
};

export default Login;
