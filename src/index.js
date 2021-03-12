module.exports = function reverse (n) {
  let arr = [];
        n = String(n);

    for(let i of n){
        arr.push(i);
    }

    return +arr.reverse().join('');
}
