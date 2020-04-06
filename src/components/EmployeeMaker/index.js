import React from "react";
import "./style.css";

function EmployeeMaker(props) {
  return (
    <tbody>
        <tr>
            <td><img src={props.image}/></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    </tbody>
  );
}

export default EmployeeMaker;
