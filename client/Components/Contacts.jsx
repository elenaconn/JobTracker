import React, { Component, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

function ContactForm () {
  const {register, handleSubmit} = useForm();
  // const { contact, setContact } = useContext();
  const [info, setInfo] = useState([]);
  
  const onSubmit = (data) => {
    setInfo(oldInfo => [...oldInfo, data]);
  };

  const infoArr = [];
    for (let i = 0; i < info.length; i++){
      infoArr.push(<div>
        <li>Name: 
          {info[i].Name}
        </li>
        <li>Position: 
          {info[i].Position}
        </li>
        <li>Email: 
          {info[i].Email}
        </li>
        <li>Phone Number: 
          {info[i].Phone}
        </li>
        <li>LinkedIn: 
          {info[i].LinkedIn}
        </li>
        <br />
      </div>
      );
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <fieldset>
          <label>
            <p>New Contact</p>
            {/* label instead of name? */}
            <input placeholder="Name" type="text" ref={register} name="Name"/> 
            <input placeholder="Position" type="text" ref={register} name="Position"/>
            <input placeholder="Email" type="text" ref={register} name="Email"/>
            <input placeholder="Phone Number" type="text" ref={register} name="Phone"/>
            <input placeholder="LinkedIn" type="text" ref={register} name="LinkedIn"/>
          </label>
        </fieldset>
        <button type="submit" autoComplete="off">Add Contact</button>
      </form>
      <div>
        {infoArr}
      </div>
        
    </div>
  );
};

export { ContactForm };