import { screen, render, waitFor, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserComponent } from "../User";
import { getUserById } from "../../../api/usersFetch";
import { mockUser } from "../../../mocks/user";

const mockOnHandlePost = jest.fn();

jest.mock("../../../api/usersFetch", ()=>({
  getUserById: jest.fn(),
  // ...
}));

describe("User component", ()=>{

  it("Se renderiza el componente de forma correcta",async()=>{
    const {getByText} = render(<UserComponent onHandlePosts={mockOnHandlePost}/>);
    await waitFor(()=>{
      // screen.debug();
      expect(getByText('Información del usuario')).toBeInTheDocument();
      expect(getByText('cargando Información del usuario')).toBeInTheDocument();
    });
  });

  it("Muestra la información del usuario, una vez se hayan cargado los datos", async()=>{
    (getUserById as jest.Mock).mockReturnValue(mockUser)
    const { getByTestId, queryByTestId} = render(<UserComponent onHandlePosts={mockOnHandlePost}/>);
    await waitFor(()=>{
      expect(getByTestId('user-info')).toBeInTheDocument();
      expect(queryByTestId('loading-msg')).not.toBeInTheDocument();
    });
  });

  it("Se ejecuta el callback de handle Posts, cuando se da click al botón", async()=>{
    (getUserById as jest.Mock).mockReturnValue(mockUser);
    const { getByRole} = render(<UserComponent onHandlePosts={mockOnHandlePost}/>);
    await waitFor(()=>{
      const button = getByRole("button", {name:"Ver posts"});
      // screen.debug(button);
      fireEvent.click(button);
      expect(mockOnHandlePost).toHaveBeenCalled();
      expect(mockOnHandlePost).toHaveBeenCalledWith(mockUser.id);
    });
  });

});