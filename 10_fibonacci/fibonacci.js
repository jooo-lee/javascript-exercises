const fibonacci = function(member) {
    // Iterative version -- it's probably better to use a temp variable instead
    // of storing the whole fibonacci sequence as an array - you'll save space.
    // member = parseInt(member);
    // if (member < 0) return "OOPS";
    // else if (member === 0) return 0;
    // else if (member === 1 || member === 2) return 1;
    // let fibSeq = [1, 1];
    // for (let i = 3; i < member + 1; i++) {
    //     fibSeq.push(fibSeq[i - 3] + fibSeq[i - 2]);
    // }
    // return fibSeq[fibSeq.length - 1];

    // Odin iterative solution
    // if (member < 0) return "OOPS";
    // if (member === 0) return 0;
    // let a = 0;
    // let b = 1;
    // for (let i = 1; i < member; i++) {
    //     const temp = b;
    //     b = a + b;
    //     a = temp;
    // }
    // return b;

    // Recursive version
    member = parseInt(member);
    if (member < 0) return "OOPS";
    else if (member === 0) return 0;
    else if (member === 1 || member === 2) return 1;
    return fibonacci(member - 1) + fibonacci(member - 2);
};

// Do not edit below this line
module.exports = fibonacci;
