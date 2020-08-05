/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/
const findIndexOfString = (input: String) => {
    const str1 = new String(input);
    const index = str1.lastIndexOf("Script");
    console.log("lastIndexOf found String :" + index);
}
findIndexOfString('abcd sdsds Script');

// OutPUt
// [Running] docker run --rm --volume "/Users/ic3/compiler-is-your-friend/"1.correctness.ts:/home/1.correctness.ts local:myts ts-node /home/1.correctness.ts
// lastIndexOf found String :11

// [Done] exited with code=0 in 1.562 seconds
