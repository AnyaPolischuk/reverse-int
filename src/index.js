module.exports = function reverse (n) {
    let res = ''
    let str = String(Math.abs(n))
    for (i = 0; i < str.length; i++) {
        res = str[i] + res
    }
    /*while (n / 10 >= 0) {
        let lastDigit = n % 10
        n = n / 10

    }*/
    return Number(res)
}
