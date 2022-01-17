import React from "react";
import * as FcIcons from "react-icons/fc";
import * as FaIcons from "react-icons/fa";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../page.css";

function Cmd() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (values) => {
    console.log("Form Submitted", values);
  };
  return (
    <div className="page">
      <h4>
        <FcIcons.FcCommandLine />
        CmD
      </h4>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Enter url here.."></TextField>
        <br />
        <div className="form-content">
          <div className="form-control">
            <Button variant="outlined" color="default" type="submit">
              <span className="start">
                <h2>
                  <FaIcons.FaEdit />
                </h2>
              </span>
            </Button>
          </div>
          <div className="form-control">
            <Button variant="outlined" color="default" type="submit">
              <span className="start">
                <h2>
                  <FaIcons.FaSave />
                </h2>
              </span>
            </Button>
          </div>
          <div className="form-control">
            <Button variant="outlined" color="default" type="submit">
              <span className="start">
                <h2>
                  <FaIcons.FaPlay />
                </h2>
              </span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cmd;
