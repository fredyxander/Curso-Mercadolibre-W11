import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../Button";

const mockUsers = [
  {},
  {},
  {},
];

describe("pruebas para componente Button", ()=>{
  const mockOnClickHandler = jest.fn();

  const renderButtonComponent = ()=>render(<Button text="Enviar" onClickHandler={mockOnClickHandler}/>);

  it("Se renderiza correctamente el componente", ()=>{
    const {getByTestId} = renderButtonComponent()
    // screen.debug();
    expect(getByTestId("button-test")).toBeInTheDocument();
  });

  it("Al dar click en el boton, se llama a la funcion handler", ()=>{
    const {getByTestId} = renderButtonComponent();
    const sendButton = getByTestId("button-test");
    fireEvent.click(sendButton);
    expect(mockOnClickHandler).toHaveBeenCalled();
    expect(mockOnClickHandler).toHaveBeenCalledWith("juan");
  });

  //render(<UsersList users={mockUsers}/>)
});
