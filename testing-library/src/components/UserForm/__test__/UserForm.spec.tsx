import {fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserForm } from "../UserForm";

describe("Pruebas para el componente UserForm", ()=>{
  
  it("Renderizado inicial de UserForm", ()=>{
    const {getByTestId, getAllByRole} = render(<UserForm/>);
    const inputEmail = getByTestId("input-email");
    fireEvent.change(inputEmail, {target: {value: "pepe@gmail.com"}});
    const emailText = getByTestId("user-email");
    expect(emailText).toHaveTextContent("pepe@gmail.com");

    //const listItems = getAllByRole("list-item"); ===> [...]
    //expect(listItems.length).toEqual(10)
  });

});