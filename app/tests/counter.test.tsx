import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Counter } from "../components/counter";

describe("Counter component", () => {
  it("renders initial value", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeTruthy();
  });
  it("increments value on Increment button click", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeTruthy();
  });
  it("decrements value on Decrement button click", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByText("-1")).toBeTruthy();
  });
  it("resets value on Reset button click", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    expect(screen.getByText("0")).toBeTruthy();
  });
});
