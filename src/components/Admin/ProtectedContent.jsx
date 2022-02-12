import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { fileUploadHandler, backButtonHandler } from "./utils";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const ProtectedContent = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const fileSelectionHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <AmplifySignOut />
      <section data-testid="logged-in-section" className="logged-in-section">
        <input
          id="img-input"
          className="english"
          type="file"
          onChange={fileSelectionHandler}
        />
        <div
          className="english"
          id="upload-button"
          onClick={() => fileUploadHandler(selectedFile)}
        >
          send it
        </div>
      </section>
      <div
        id="back-button"
        className="english"
        data-testid="back-to-main"
        onClick={() => backButtonHandler(dispatch, history)}
      >
        Back to main
      </div>
    </>
  );
};
