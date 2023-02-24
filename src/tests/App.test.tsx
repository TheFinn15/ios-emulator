import React from "react";
import { render, screen } from "@testing-library/react";
import { PhoneContainer } from "../components/phone-container";

test("renders learn react link", () => {
  render(<PhoneContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
