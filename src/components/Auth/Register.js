// import React, { Component } from 'react';

// class Register extends Component {
//   state = {
//     email: '',
//     password: '',
//     error: null,
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const user = this.state;
//     axios.post(`${API_URL}/auth/login`, user, { withCredentials: true })
//       .then(res => {
//         console.log(res);
//         this.props.setCurrentUser(res.data.id);
//         this.props.history.push('/profile');
//       })
//       .catch(err => {
//         // console.log(err.response);
//         this.setState({ error: err.response.data.message });
//       });
//   };

// render() {
//     return (
      
//          <>
//         <div className="row">
//           <div className="col-md-4 offset-md-4">
//             <form className="mt-5">
//             <div class="form-group">
//                 <label for="exampleInputEmail1">Name</label>
//                 <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
//               </div>
//               <div class="form-group">
//                 <label for="exampleInputEmail1">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//               </div>
//               <div class="form-group">
//                 <label for="exampleInputPassword1">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1" />
//               </div>
//               <button type="submit" class="btn btn-primary">Login</button>
//             </form>
//           </div>
//         </div> 
//        </>
    
//     )
// }

// }

// export default Register;



// updated code 

import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    errors: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Register Submit - ', this.state);
    const newUser = this.state;
    axios.post(`${API_URL}/auth/register`, newUser)
      .then(res => this.props.history.push('/login'))
      .catch(err => {
        console.log(err.response);
        this.setState({ errors: err.response.data.errors });
      });
  };

  render() {
    return (
      <div className="row">
        {this.state.errors && this.state.errors.map((e, i) => (
          <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}} role="alert" key={i}>
            {e.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))}
        <section id="register" className="col-md-4 offset-md-4">
          <h2 className="mb-4">Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="username" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="form-control form-control-lg" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control form-control-lg" />
            </div>
            <button type="submit" className="btn btn-primary float-right">Register</button>
          </form>
        </section>
      </div>
    );
  };
};

export default Register;