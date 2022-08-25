import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";
import { get } from "jquery";

afterEach(cleanup);

describe("Nav component", () => {
  // test 1 baseline
  it("renders", () => {
    render(<Nav />);
  });

  // snapshot
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Emoji is visible", () => {
  it("inserts emoji into h2", () => {
    // arrange
    const { getByLabelText } = render(<Nav />);
    // assert
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into links", () => {
    // arrange
    const { getByTestId } = render(<Nav />);
    // assert
    expect(getByTestId("lilnk")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
