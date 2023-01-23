import React, { useState } from "react";

function TextForm(props) {
  const handleConvertUp = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Converted to upperCase");
  };

  const handleConvertLw = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("primary", "Converted to LowerCase");
  };

  const handleConvertClear = () => {
    let Text = " ";
    setText(Text);
    props.showAlert("danger", "Clear text.");
  };

  const handleConvertRev = () => {
    let newText = Text.split(" ");
    let splitText = newText.reverse();
    let joinText = splitText.join(" ");
    setText(joinText);
    props.showAlert("warning", "Reverse the String!");
  };

  const handleConvertCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("info", "ClipBoard has been copyed!");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  return (
    <>
      <div
        className={`bg-${props.mode === "dark" ? "secondary" : ""} text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container-fluid mb-3 py-4 px-5">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className={`bg-${props.mode === "dark" ? "secondary" : ""} text-${
                props.mode === "dark" ? "light" : "dark"
              } form-control`}
              value={Text}
              onChange={handleOnChange}
              rows="8"
            ></textarea>
            <button
              className="btn btn-warning mt-3 fw-bold mx-3"
              onClick={handleConvertUp}
            >
              Convert To UpperCase
            </button>

            <button
              className="btn btn-primary mt-3 fw-bold mx-3"
              onClick={handleConvertLw}
            >
              Convert To LowerCase
            </button>
            <button
              className="btn btn-danger mt-3 fw-bold mx-3"
              onClick={handleConvertClear}
            >
              Clear Text
            </button>
            <button
              className="btn btn-success mt-3 fw-bold mx-3"
              onClick={handleConvertRev}
            >
              Reverse Text
            </button>
            <button
              className="btn btn-info text-white mt-3 fw-bold mx-3"
              onClick={handleConvertCopy}
            >
              Copying Text
            </button>
          </div>
        </div>
        <div className="container">
          <p>
            <span className="fw-bold fs-4">{Text.split(" ").length}</span>
            <span className="text-primary fw-bold">Words </span>
            <span className="text-danger fw-bold">& </span>
            <span className="fw-bold fs-4">{Text.length}</span>
            <span className="text-primary fw-bold">Charcters</span>
          </p>
          <p>
            <span className="fw-bold fs-4">
              {0.008 * Text.split(" ").length}{" "}
            </span>
            <span className="text-primary fw-bold">
              Time to Read this Text.
            </span>
          </p>
          <h4>Text Summary</h4>
          <p>{Text}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
