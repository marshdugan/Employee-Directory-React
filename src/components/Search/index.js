// import React, { Component } from "react";
// import "./style.css";
// import friends from "../../friends.json"

// class Search extends Component {
//   state = {
//     person: "",
//   };

//   handleInputChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     friends.filter(item => {
//         if (this.state.person.toLowerCase() === item.name.toLowerCase()) {
//             this.setState({
//                 person: item
//             })
//             return;
//         }
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form className="form">
//           <input
//             value={this.state.person}
//             name="person"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Search"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Search;
