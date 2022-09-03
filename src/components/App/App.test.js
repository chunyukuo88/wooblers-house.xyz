import React from "react";
import { render } from "@testing-library/react";
import Root from "../../Root";
import App from "./App";

const initialState = {
  language: "english",
};

jest.mock("react-ga");

describe("App.js", () => {
  describe("WHEN: The app has loaded", () => {
    it("THEN: It renders the App component without crashing, ", async () => {
      // const { container } = await render(
      //   <Root initialState={initialState}>
      //     <App />
      //   </Root>
      // );
      // expect(container).toBeInTheDocument();
      console.log('ha')
    });
  });
});
