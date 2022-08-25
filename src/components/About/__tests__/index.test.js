import React from "react";

//retrieve functions from React testing library
import { render, cleanup } from "@testing-library/react";
// expect/extend library
import "@testing-library/jest-dom/extend-expect";
// import the component to test (".." appears to be same as ../?)
import About from "..";

// cleanup function - cleans memory after each test
afterEach(cleanup);

// describe function declares the component we are testing
describe("About component", () => {
  // render About test
  // create test 1 - baseline to verify component - 'renders declares what is being testing "renders" callback runs the test
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot DOM node structure", () => {
    // as fragment function - returns a snapshot of the component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
