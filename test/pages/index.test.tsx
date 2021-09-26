import React from "react";
import { render,screen, waitFor } from '@testing-library/react';
import HomePage from "../../src/pages/index.page";
import { mockedScheduleList } from "../__mocks__/mocks";
import { ThemeProvider } from "styled-components";
import { themeDark } from "../../src/styles/theme";
/**
 * @jest-environment jsdom
 */
describe("HomePage Components", () => {
  beforeEach(() => {
    const props = { data: mockedScheduleList, notFound: false }

    render(
      <ThemeProvider theme={themeDark}>
        <HomePage data={ props.data } notFound={props.notFound} />
      </ThemeProvider>
    );
  })

  it("should render the heading", () => {
    const textToFind = "TV Bland"
    const heading = screen.getByText(textToFind);
    expect(heading).toBeInTheDocument();
  })

  it("should render heading paragraph", () => {
    const textToFind = "TV Shows and web series database."
    const headingParagraph = screen.getByText(textToFind);
    expect(headingParagraph).toBeInTheDocument();
  })
});
