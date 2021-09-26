import React from 'react';
import './Programmer.css'
const Programmer = (props) => {
    const { img, name, age, salary, country, role } = props.programmer

    return (

        <div className="col-md-4">
            <div className="programmer">
                <div className="img-div">
                    <img className="img" src={img} alt="" />
                </div>
                <ul  className="ul">
                    <li>Name: <span> {name} </span></li>
                    <li>Age: <span> {age} </span></li>
                    <li>Role: <span> {role} </span></li>
                    <li>Salary: $ <span> {salary} </span></li>
                    <li>Country: <span>{country} </span></li>
                </ul>
                <div className="button-div">
                    <button onClick={() => props.handleCart(props.programmer)} className="button" > <i className="fas fa-user"></i> add to Team</button>
                </div>

            </div>
        </div>

    );
};

export default Programmer;