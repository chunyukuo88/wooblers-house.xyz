import { AdminPage } from "../AdminPage.jsx";
import { render, screen } from "@testing-library/react";
import Root from "../../../Root";

describe("Layout", () => {
  test("The component loads without problems. ", () => {
    render(
      <Root>
        <AdminPage />
      </Root>
    );

    const amplifyContainer = screen.getByTestId("protectedContent");

    expect(amplifyContainer).toBeDefined();
  });
});
