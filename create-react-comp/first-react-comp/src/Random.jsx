function Random (){
   
  let number = Math.random() * 100;

  

  return <h1 style={{'background-color': '#776691'}} >This is a Random Number: {Math.round(number)}</h1>
  


}

export default Random;