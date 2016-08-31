function forLoop(array){
   var i = 0
  for(i ; i < 25; i++){
    if(i === 1){
      array.push("I am a strange 1 loop")
    }
    else{
     array.push(`I am ${i} strange loops`)
    }
  }
  return array
}

function whileLoop(num){
  while(num > 0){
    console.log(--num)
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 var len
 do{
   console.log(array.pop())
    //len = array.length
    len = array.length
 }while(len > 0 && maybeTrue())
}
