export const Button = ({text, onClickHandler})=>{
  return(
    <button onClick={onClickHandler}>{text}</button>
  )
}