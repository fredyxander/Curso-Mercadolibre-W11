import { useState } from "react";

type ButtonProps = {
  text: string;
  onClickHandler: (name:string)=>void;
}

export const Button = ({text, onClickHandler}: ButtonProps)=> {
  const [state, setState]=useState("");

  const updateState = ()=>{
    setState("nuevo estado");
  };

  return (
    <>
      <p>{state}</p>
      <p data-testid="paragraph-test">{text}</p>
      <button data-testid="button-test" onClick={()=>onClickHandler("juan")}>{text}</button>
    </>
  )
}
