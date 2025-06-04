import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserDetail } from "../UserDetail";
import { getUser } from "../../../api/users";
import { act } from "react";

jest.mock("../../../api/users", ()=>({
  getUser: jest.fn(),
}));

describe("pruebas del componente UserDetail", ()=>{
  it("Inicialmente el componente muestra el mensaje cargando", ()=>{
    const {getByTestId} = render(<UserDetail/>);
    const loadingElement = getByTestId("loading-test");
    expect(loadingElement).toHaveTextContent("Cargando...");
  });

  it("luego de obtener los datos, se muestran correctamente", async()=>{
    const mockUser = {id:10, username:"Laura", city:"Madrid"};
    (getUser as jest.Mock).mockResolvedValue(mockUser);
    act(()=>{
      render(<UserDetail/>);
    })

    await waitFor(()=>{
      const username = screen.getByTestId("username-test");
      //screen.debug(username)
      expect(username).toHaveTextContent("Laura");
    });
  });
});