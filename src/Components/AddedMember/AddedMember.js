import React from 'react';
import './AddedMember.css';

const AddedMember = (props) => {
    const programmer = props.programmer;
    return (
        <div className="row addedMember">
            <img className="col-4 image " src={programmer.img} alt="" />
            <p className="col-8 name" >{programmer.name}</p>
        </div>
    );
};

export default AddedMember;