import { Header } from "../components";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";

describe("Header", () => {
  it("renders Header correctly", () => {
    const header = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
