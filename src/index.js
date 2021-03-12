module.exports = function reverse (n) {
  let arr = [];
          n = String(n);

          if(n < 0){
            for(let i of n){
                if(i == '-'){
                    continue;
                }else{
                    arr.push(i);
                }
            }
            arr.reverse();
          }else{
            for(let i of n){
                arr.push(i);
            }
            arr.reverse();
          }

          console.log(arr)
  
      return +arr.join('');;
}


