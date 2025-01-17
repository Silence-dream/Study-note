// 21.写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5


// 思路1：
// //程序分析：对n进行分解质因数，应先找到一个最小的质数k，然后按下述步骤完成：
// //(1)如果这个质数恰等于n，则说明分解质因数的过程已经结束，打印出即可。
// //(2)如果n>k，但n能被k整除，则应打印出k的值，并用n除以k的商,作为新的正整数n,重复执行第一步。
// //(3)如果n不能被k整除，则用k+1作为k的值,重复执行第一步。

// 思路2：num的最小质数n<=num,且最小质数为2，
// 1.将num%n取余，等于0则继续进行num/n运算继续分解质因数并打印输出
// 2.如果这个质数恰等于n，则说明分解质因数的过程已经结束，打印出即可。
function fj(n) {
    var x = "", t;
    !function (a) {
        for (t = a; --t;) {
            if (a % t == 0) {
                x += "*" + a / t;
                return arguments.callee.call(null, t);
            }
        }
        if (t == 1) x += "*" + a;
    }(n);
    return n + "=" + x.substring(1);
}
var result = fj(90);
console.log(result);