import { useEffect } from "react";

export const ClickSite = ()=>{
  const handleClick = (e:MouseEvent)=>{
    console.log(`Hiciste click en X: ${e.clientX}, Y: ${e.clientY}`);
  };

  useEffect(()=>{
    document.addEventListener("click", handleClick);

    return ()=>{
      console.log("desmonta");
      document.removeEventListener("click", handleClick);
    }//cuando el componente se desmonta
  },[])

  return(
    <>
      <p>Haz click en cualquier lugar</p>
    </>
  )
}