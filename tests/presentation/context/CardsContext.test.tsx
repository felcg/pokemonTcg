import React, { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CardsContext } from "@presentation/context";
import { CardContextInterface } from "../../../src/presentation/protocols";

const TestComponent = () => {
  const { setLoading }: CardContextInterface = useContext(CardsContext);
  const changeLoadingState = () => {
    setLoading(true);
  };
  return (
    <>
      <button onClick={changeLoadingState}>Test Button</button>
    </>
  );
};

describe("CardsContext", () => {
  const setLoading: jest.Mock = jest.fn();
  const mockUseContext: jest.SpyInstance = jest.spyOn(React, "useContext");

  beforeEach(() => {
    mockUseContext.mockReturnValue({
      setLoading,
    });
  });

  it("should be able to set swedish by clicking on button", () => {
    render(<TestComponent />);
    const submitButton = screen.getByText("Test Button");
    fireEvent.click(submitButton);
    expect(setLoading).toHaveBeenCalledTimes(1);
  });
});
