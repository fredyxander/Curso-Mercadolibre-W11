import { useEffect, useState } from "react";

const buttonStyle: React.CSSProperties = {
  position:"fixed",
  bottom:"20px",
  right:"20px"
}

export const BackToTopButton = ()=>{
  const [showButton, setShowButton] = useState(false);

  const handleToTop = ()=>{
    window.scrollTo({top:0, behavior:'smooth'});
  }

  const handleScroll = ()=>{
    console.log(window.scrollY);
    if(window.scrollY>200){
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  return(
    <>
      {showButton &&
       <button style={buttonStyle} onClick={handleToTop}>Volver arriba</button>
      }
    </>
  )
  
}