const beeping = (x) => {
  if (!Number(x)){
    return console.log("no beeps");
  }
  else if (x < 0){
    return console.log("We can't schedule anything in the past")
  }
  else {
    setTimeout(() =>{
      process.stdout.write('\x07');
    }, 500)
  }
};

beeping(5)
