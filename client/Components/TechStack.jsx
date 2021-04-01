import React, { Component, useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
    
export default function TechStack () {

  const [techStack, setTechStack] = useState('add tech here');

  const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
  
  function handleClick () {

  };

    return (
      <form>
        <div>
            <TextField
            id="filled-textarea"
            label="Tech Stack"
            placeholder={techStack}
            multiline
            variant="filled"
            onChange={event => setTechStack(event.target.value)}
            size="medium"
            />
            {/* <Button variant="outlined" color="secondary" onClick={handleClick}>
            Add Tech
            </Button> */}
        </div>
      </form>  
    );
};