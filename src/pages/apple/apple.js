import React from "react";
import * as AiIcons from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../page.css";


const Apple = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <div className="page">
      <h4>
        <AiIcons.AiFillApple />
        Apple
      </h4>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Enter url here.."></TextField>
        <br />
        <div className="form-content">
          <Button variant="outlined" color="default" type="submit">
            <span className="start">
              <FaPlay />
            </span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Apple;
