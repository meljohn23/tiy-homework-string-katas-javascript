//Given a string, return a new string where spaces have been inserted between each
//letter. Do not include any additional spaces before the first character or after
//the last character.
function explode(s) {

    var temp = "";

    for (var i = 0; i < s.length; i++) {
        temp += s.substring(i, i + 1) + " ";
    }
    return temp.trim();
}

console.log(explode("Example"));
console.log(explode("Cat"));
console.log(explode(""));
console.log(explode("C") + "\n");


//possibly use !str.startsWith("not ") ? "not "
//Given a string, return a new string where "not " has been added to the front.
// However, if the string already begins with "not", return the string unchanged.
// Note: use .equals() to compare 2 strings.

function notString(s) {

    if (s.length >= 3 && s.substring(0, 3) == ("not")) {
        return s;
    }
    return "not " + s;
}
console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad") + "\n");

//Given a non-empty string and an int n, return a new string where the char at index
//n has been removed. The value of n will be a valid index of a char in the original
//string (i.e. n will be in the range 0..str.length()-1 inclusive).
// Start this substring at n+1 to omit the char.
// Can also be shortened to just str.substring(n+1)
// which goes through the end of the string.

function missingChar(str, n) {
    var front = str.substring(0, n);

    var back = str.substring(n + 1, str.length);

    return front + back;
}

console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 4));
console.log(missingChar("melanie", 4) + "\n");

//Given a string, return a new string where the first and last chars have been exchanged.
function frontBack(str) {
    if (str.length <= 1) return str;

    var mid = str.substring(1, str.length - 1);

    // last + mid + first
    return str[str.length - 1] + mid + str[0];
}

console.log(frontBack("code"));
console.log(frontBack("a"));
console.log(frontBack("ab") + "\n");

// last + mid + firsts than 3, the front is whatever is there. Return
// a new string which is 3 copies of the front.
function front3(str) {
    var front = "";

    if (str.length >= 3) {
        front = str.substring(0, 3);
    } else {
        front = str;
    }
    return front + front + front;
}
console.log(front3("Java"));
console.log(front3("Chocolate"));
console.log(front3("abc") + "\n");

//Given a string, take the last char and return a new string with the last char added at the front and back,
// so "cat" yields "tcatt". The original string will be length 1 or more.
// last + mid + last
function backAround(str) {
    var last = str.substring(str.length - 1);
    return last + str + last;
}
console.log(backAround("cat"));
console.log(backAround("Hello"));
console.log(backAround("a") + "\n");

//Given a string, take the first 2 chars and return the string
//with the 2 chars added at both the front and back, so "kitten
// yields"kikittenki". If the string length is less than 2,
// use whatever chars are there.
function front22(str) {
    var front;

    if (str.length >= 2) {
        front = str.substring(0, 2);
    } else {
        front = str;
    }
    return front + str + front;
}
console.log(front22("kitten"));
console.log(front22("HaHaHa"));
console.log(front22("abc") + "\n");

//Given a string, if the string "del" appears starting at index 1,
//return a string where that "del" has been deleted.
//Otherwise, return the string unchanged.
function delDel(str) {
    if (str.length >= 4 && str.substring(1, 4) == ("del")) {
        return str.substring(0, 1) + str.substring(4);
    } else {
        return str;
    }
}
console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("adedbc") + "\n");

//Given a string, return a string made of the first 2 chars
//(if present), however include first char only if it is
//'o' and include the second only if it is 'z', so "ozymandias"
// yields "oz".

function startOz(str) {
    var result = "";

    if (str.length >= 1 && str[0] == 'o') {
        result = result + str[0];

        if (str.length >= 2 && str[1] == 'z') {
            result = result + str[1];
        }
    }
    return result;
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx") + "\n");

//Given a string, return a new string where the last 3 chars
//are now in upper case. If the string has less than 3 chars,
//uppercase whatever is there. Note that str.toUpperCase()
//returns the uppercase version of a string.
function endUp(str) {

    if (str.length <= 3) return str.toUpperCase();
    var cut = str.length - 3;
    var front = str.substring(0, cut);
    var back = str.substring(cut);

    return front + back.toUpperCase();
}
console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi") + "\n");

