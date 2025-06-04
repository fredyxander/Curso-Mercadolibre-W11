import {fireEvent, render, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import { UsersList } from "../UsersList";

const mockUsers = [
  {id: 1,name: "Leanne Graham"},
  {id: 2,name: "Ervin Howell"},
]

global.fetch = jest.fn(()=>
  Promise.resolve({
    status: 200,
    ok: true,
    json: ()=>Promise.resolve(mockUsers)
  } as Response)
);

describe("Pruebas para el componente UsersList", ()=>{
  
  it("Renderizado inicial de UserForm", async()=>{
    const { findByTestId, getByTestId, queryByTestId } = render(<UsersList/>);
    // const usersList = await findByTestId("users-list");
    // expect(usersList).toBeInTheDocument();

    await waitFor(()=>{
      const usersList = getByTestId("users-list");
      expect(usersList).toBeInTheDocument();
      // const categoriesElm = getByTestId("category-list");
      expect(queryByTestId("loading")).not.toBeInTheDocument();
    });
  });

});