/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
    - มันขึ้น Infinity ครับไม่เกิด error
2) Now, make a *single* code change on line 14:
2.1) without changing the number 42;
2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
3) What did you learn from this exercise?
    - พึ่งรู้ว่ามี Infinity เกิดขึ้นตอนหารด้วย 0 ครับ
    - ต้องระวังการ validate variable ครับ
*/
function safeDivide(): number {
    const x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    x = x - 42;

    return 42 / x;
}
console.log(safeDivide());
