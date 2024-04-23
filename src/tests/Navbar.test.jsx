import { Navbar } from "../components";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";

describe("Navbar", () => {
  it("renders navbar correctly", () => {
    const navbar = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
