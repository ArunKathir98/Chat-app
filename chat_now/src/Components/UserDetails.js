// import React, { Component } from 'react';
// import {Redirect, NavLink} from "react-router-dom";
// import '../Css/Styles.css';
// import user_image from '../Images/user_image.png';
// import axios from 'axios';
// class UserDetails extends Component {
//   constructor() {
//     super();
//     this.state = {
//       result: '',
//       user_name: '',
//       user_email: '',
//       user_password: '',
//       user: false,
//       image:'',
//       error:'',
//       message:''
//     }
//   }
// imageChange (e) {
//   e.preventDefault();
//   var file:File = e.target.files[0];;
//   var myReader:FileReader = new FileReader();
//   myReader.onloadend = (e) => {
//     this.setState({
//       file: file,
//       image: myReader.result
//     });
//   }
//   myReader.readAsDataURL(file);
// }
// imageUpload (event) {
//   event.preventDefault();
//   axios.put(`http://172.24.125.244:8000/signup/image/${localStorage.getItem("user_id")}`, {
//     image:this.state.image,
//   })
//   .then(result=> {
//     this.setState({
//       message:"Image successfully uploaded"
//     })
//   }).catch(error => {
//     this.setState({
//       error:"Image not uploaded"
//     })
//   });
// }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState({user: true});
//   }
//   componentWillMount() {
//     this.setState({
//       result: JSON.parse(localStorage.getItem("results")),
//     });
//   }
//   render() {
//     if(localStorage.getItem("results") === null ) {
//       return(<Redirect to="/login" />);
//     }
//     if(this.state.user) {
//       return(<Redirect exact to="/messenger" />);
//     }
//     return(
//       <div>
//         <div>
//           <ul className="Home">
//             <li>
//               <NavLink exact to="/messenger"><button className="ButtonHome">Chat Window</button></NavLink>
//             </li>
//             <li>
//               <NavLink exact to="/login"><button className="ButtonLogout">Logout</button></NavLink>
//             </li>
//           </ul>
//         </div>
//         <div>
//           { (this.state.image==='')?<img className="UserImage" src={this.state.result.image} alt="User"/>:
//           <img className="UserImage" src={this.state.image} alt="User"/> }
//           <div className="input-group ImageField">
//             <input className= "form-control" type="file" accept=".png" onChange={this.imageChange.bind(this)}/>
//             <button type="submit" className="btn btn-primary btn-md UploadButton" onClick={this.imageUpload.bind(this)}>Upload</button>
//           </div>
//         </div>
//         <div className="form-block UserStyle">
//           <form onSubmit={ this.handleSubmit.bind(this) } >
//             <label>User Name</label>
//             <div className="input-group Data">
//               <input className="form-control" ref="name" type="text" value={ this.state.result.name } />
//             </div>
//             <label>Email</label>
//             <div className="input-group Data">
//               <input className="form-control" ref="email" type="text" value={ this.state.result.email } />
//             </div>
//             <div className="input-group">
//               <button type="submit" className="btn btn-primary btn-md OkButton">Ok</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// export default UserDetails;
