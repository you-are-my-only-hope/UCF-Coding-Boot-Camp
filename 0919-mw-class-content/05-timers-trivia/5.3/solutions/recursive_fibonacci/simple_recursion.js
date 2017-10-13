var simpleRecursion = function(n){
  // if n is greater than zero
  if(n>0){

    //log n to the console
    console.log(n);

    //then call simpleRecursion again, and pass in n-1
    //this will run the function again with a number one less than n
    simpleRecursion(n-1);
  } else{
    console.log('Done');
  }
};
