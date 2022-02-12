import { render, fireEvent, screen } from "@testing-library/react";
import { ProtectedContent } from "../ProtectedContent.jsx";
import { fileUploadHandler, backButtonHandler } from "../utils";
import Root from "../../../Root";

jest.mock("../utils");

const initialState = { language: "english" };

describe("ProtectedContent.jsx", () => {
  describe("Layout", () => {
    it("The content loads properly.", () => {
      render(
        <Root initialState={initialState}>
          <ProtectedContent />
        </Root>
      );
      const loggedInSection = screen.getByTestId("logged-in-section");

      expect(loggedInSection).toBeInTheDocument();
    });
    it("The button to return to the main page is there.", () => {
      render(
        <Root initialState={initialState}>
          <ProtectedContent />
        </Root>
      );
      const backButton = screen.getByTestId("back-to-main");

      expect(backButton).toBeInTheDocument();
    });
  });
  describe("Interaction", () => {
    describe("WHEN: The user clicks the button to return to the main page", () => {
      it("THEN: The click handler triggers the dispatcher that takes them there.", () => {
        backButtonHandler.mockImplementation(jest.fn());

        render(
          <Root initialState={initialState}>
            <ProtectedContent />
          </Root>
        );
        const backButton = screen.getByTestId("back-to-main");

        fireEvent.click(backButton);

        expect(backButtonHandler).toHaveBeenCalledTimes(1);
      });
    });
    describe("WHEN: The user has selected a file and clicks the upload button,", () => {
      it("THEN: The upload utility function is invoked with the selected file.", () => {
        fileUploadHandler.mockImplementation(jest.fn());
        const someImage = new File(["(⌐□_□)"], "chucknorris.png", {
          type: "image/png",
        });
        render(
          <Root initialState={initialState}>
            <ProtectedContent />
          </Root>
        );
        const chooseFileButton = document.querySelector("input");
        const uploadButton = document.querySelector("#upload-button");

        fireEvent.change(chooseFileButton, {
          target: { files: [someImage] },
        });
        fireEvent.click(uploadButton);

        expect(fileUploadHandler).toHaveBeenCalledWith(someImage);
        expect(fileUploadHandler).toHaveBeenCalledTimes(1);
      });
    });
  });
});
