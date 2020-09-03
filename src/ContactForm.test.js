import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("Test Contact Form With No errors", () => {
  //type into all three inputs
  // 1. query for all inputs
  //2. Run the change event to add text
  render(<ContactForm />);

  const firstName = screen.getByPlaceholderText(/Edd/i);
  const lastName = screen.getByPlaceholderText(/Burke/i);
  const email = screen.getByTestId(/email/i);
const message = screen.getByLabelText(/message/i);
  //events with React Testing Library
  fireEvent.change(firstName, { target: { value: "Cameron" } }); //Pass in event object
  fireEvent.change(lastName, { target: { value: "Lares" } }); //Pass in event object
  fireEvent.change(email, { target: { value: "cameron@gmail.com" } }); //Pass in event object
  fireEvent.change(email, { target: { value: "Testing the message field" } }); //Pass in event object

  const submmitButton = screen.getByTestId(/form/i);

  fireEvent.click(submmitButton);


  const header = screen.getByText(/my contact form/i)
  expect(header).toBeInTheDocument()


});
