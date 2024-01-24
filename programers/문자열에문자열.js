/*
문자열 str1, str2가 매개변수로 주어집니다.
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
"ab6CDE443fgh22iJKlmn1o"	
"6CD"	
1
"AbcAbcA"	
"AAA"
2
return a > b ? 1 : -1;
*/
const a = ["ab6CDE443fgh22iJKlmn1o"];
const b = ["6CD"];
function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
console.log(solution(a, b));

//
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
