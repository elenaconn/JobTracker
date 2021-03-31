import React, { Component, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

function ContactForm () {
  const {register, handleSubmit} = useForm();
  // const { contact, setContact } = useContext();
  const [info, setInfo] = useState([]);
  
  const onSubmit = (data) => {
    console.log('form data', data);
    setInfo(oldInfo => [...oldInfo, data]);
    console.log('info', info);
  };

  const infoArr = [<div>hello</div>];
  useEffect(() => {
    for (let i = 0; i < info.length; i++){
      infoArr.push(<div>hello2</div>)
    }
    console.log(infoArr);
  }, []);
  
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
            <input placeholder="Phone Number" type="text" ref={register} name="Phone Number"/>
            <input placeholder="LinkedIn" type="text" ref={register} name="LinkedIn"/>
          </label>
        </fieldset>
        <button type="submit" autoComplete="off">Add Contact</button>
      </form>
      <div>
        {infoArr}
      </div>
        {/* <RenderSubmit info={info} /> */}
    </div>
  );
};

function RenderSubmit ({info}) {

  return (
    <div>
      <div>Name: 
        {info.Name}
      </div>
      <div>Position: 
        {info.Position}
      </div>
      <div>Email: 
        {info.Email}
      </div>
      <div>Phone Number: 
        {info.Phone}
      </div>
      <div>LinkedIn: 
        {info.LinkedIn}
      </div>
    </div>
  );
};

export { ContactForm, RenderSubmit };