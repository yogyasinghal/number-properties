function isSquareRoot(n){
    return n > 0 && Math.sqrt(n) % 1 === 0;
}
function addNum(a,b){
    return a+b;
}
function subNum(a,b){
    return a-b;
}
function mulNum(a,b){
    return a*b;
}
function divNum(a,b){
    return a/b;
}
function squareNum(n){
    return n*n;
}
module.exports = {
    isSquareRoot:isSquareRoot,
    addNum:addNum,
    subNum:subNum,
    squareNum:squareNum,
    mulNum:mulNum,
    divNum:divNum
} ;