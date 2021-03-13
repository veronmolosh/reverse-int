module.exports = function reverse(n) {
    let nAbs = Math.abs(n); //делаем модуль числа n
    return Number(String(nAbs).split('').reverse().join(''));
}