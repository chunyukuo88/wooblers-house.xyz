import { Display } from "../Display";
import { fireEvent, render, screen } from "@testing-library/react";
import staticStrings from "../../../StaticStrings";
import Root from "../../../Root";

const props = {
  photosObject: {
    Contents: [],
  },
};

const initialState = { language: "english" };

describe("Display()", () => {
  beforeEach(() => {
    props.photosObject.Contents = [
      { Key: "0" },
      { Key: "1" },
      { Key: "2" },
      { Key: "3" },
    ];
  });
  describe("GIVEN: The component has loaded,", () => {
    it("THEN: The first photograph is displayed.", () => {
      render(<Display {...props} />);
      const displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/0");
    });
  });
  describe("WHEN: The user clicks the right arrow", () => {
    it("THEN: The next photograph is revealed.", () => {
      render(<Display {...props} />);
      const rightArrow = screen.getByTestId("right-arrow");

      fireEvent.click(rightArrow);
      const displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/1");
    });
  });
  describe("WHEN: The user clicks the left arrow after viewing the second photo,", () => {
    it("THEN: The first photo is revealed.", () => {
      render(<Display {...props} />);
      const rightArrow = screen.getByTestId("right-arrow");
      const leftArrow = screen.getByTestId("left-arrow");

      let displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/0");

      fireEvent.click(rightArrow);
      displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/1");

      fireEvent.click(leftArrow);
      displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/0");
    });
  });
  describe("WHEN: The user clicks the left arrow while viewing the first photo", () => {
    it("THEN: It cycles back to the last photo.", () => {
      render(<Display {...props} />);
      const leftArrow = screen.getByTestId("left-arrow");

      fireEvent.click(leftArrow);
      const displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/3");
    });
  });
  describe("WHEN: The user clicks the right arrow and there are no more photos", () => {
    it("THEN: It cycles back to the first photo.", () => {
      render(<Display {...props} />);
      const rightArrow = screen.getByTestId("right-arrow");

      fireEvent.click(rightArrow);
      fireEvent.click(rightArrow);
      fireEvent.click(rightArrow);
      let displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/3");

      fireEvent.click(rightArrow);
      displayedImage = screen.getByTestId("photo");

      expect(displayedImage).toHaveClass("www.mock-photo-source.com/0");
    });
  });
  describe("WHEN: There are no photos, ", () => {
    beforeEach(() => {
      props.photosObject.Contents = [];
    });
    it("THEN: The default photo length is set to zero and a Loading message is shown.", () => {
      render(
        <Root initialState={initialState}>
          <Display {...props} />
        </Root>
      );
      const noPhotosMessage = screen.getByTestId("no-photos-message");

      expect(noPhotosMessage).toBeDefined();
    });
    it("AND: the Loading message is localized.", () => {
      initialState.language = "russian";

      const expectedMessage = staticStrings.loadingMessage.russian;
      render(
        <Root initialState={initialState}>
          <Display {...props} />
        </Root>
      );
      const noPhotosMessage = screen.getByTestId("no-photos-message");

      expect(noPhotosMessage).toHaveTextContent(expectedMessage);
    });
    it("AND: The photo display and arrows disappear.", () => {
      render(
        <Root initialState={initialState}>
          <Display {...props} />
        </Root>
      );
      const leftArrow = document.querySelector("#left-arrow");

      const rightArrow = document.querySelector("#right-arrow");

      expect(leftArrow).toBeNull();
      expect(rightArrow).toBeNull();
    });
  });
});
