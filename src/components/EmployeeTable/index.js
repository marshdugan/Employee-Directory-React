import React, {Component} from "react"
import "./style.css"
import friends from "../../friends.json";
import EmployeeMaker from "../EmployeeMaker"

class EmployeeTable extends Component {
    state = {
        userData: friends,
        person: ""
    }

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    

    render() {
    return (
        <>
        <form className="form">
          <input
            value={this.state.person}
            name="person"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
                {this.state.userData && this.state.userData.map(item => (
                    item.name.toLowerCase().includes(this.state.person && this.state.person.toLowerCase()) ?
                    <EmployeeMaker 
                        image={item.image}
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        dob={item.dob}
                    /> : null
                ))}
        </table>
        </>
    )
    }
}

export default EmployeeTable;