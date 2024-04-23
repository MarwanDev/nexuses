import { Footer } from "../components";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import renderer from "react-test-renderer";

describe("footer", () => {
  it("renders footer correctly", () => {
    const footer = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
