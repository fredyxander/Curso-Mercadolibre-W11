import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "../Home";

describe("Pruebas para el componente Home", ()=>{
  
  it("Renderizado inicial de Home", ()=>{
    const {container} = render(<Home/>);
    expect(container).toMatchSnapshot();
  });

  it("Se renderizan los datos correctamente",()=>{
    const {getByTestId} =  render(<Home/>);
    const title = getByTestId("home-title");
    expect(title).toHaveTextContent("Bienvenida!");
  });

});