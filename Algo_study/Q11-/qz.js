/*
 * 11. for문을 이용한 기본활용
1-100까지 모두 더하는 code를 <pass> 부분에 완성하세요 for사용!

출력값
1+2+3.....+100 //5050
*/
let s11 = 0;
for (let i = 0; i <= 100; i++) {
  s11 += i;
}
// console.log(s11);

/*--------------------------------------------------------------------*/
/*
 * 12. 게임캐릭터 클래스 만들기
다음 데이터에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되도록,
코드 값을 바꾸지 마세요
데이터
<여기에 class를 작성>


const Wizard={
    health:545
}
const x12 = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
 */
// ?????? 이거뭐지? PASS!!!
// 뭐..무슨 질문이야..?
/*--------------------------------------------------------------------*/
/*
 * 13. 몇 번째 행성인가요
우리의 행성은 수,금,지,화,목,토,천,해 8개입니다 저희는 우리 태양계의 n번째 행성이 무엇인지 알고싶다.

입력값으로 행성의 순서를 나타내는 숫자 n이 입력됩니다
출력으로 그 순서에 해당하는 행성의 이름을 출력해주세요
예시
입력: 1 , 출력 : 수성
 */
function q13(input) {
  const uni13 = {
    1: "수성",
    2: "금성",
    3: "지구",
    4: "화성",
    5: "목성",
    6: "토성",
    7: "천왕성",
    8: "혜왕성",
  };
  const number = uni13[input];
  return console.log(`입력값:${input},출력값:${number}`);
}
//입력값
q13(3);

/*--------------------------------------------------------------------*/
/*
 * 14. 3의 배수인가요
369게임중 입력으로 랜덤 숫자 n이 주어집니다
만약 그 수가 3의배수라면 '짝' 아니라면 n(숫자)을 그대로 출력해주세요


입력3 출력 짝
입력5 출력 5

// console.log(`입력값:${input},출력값:${uni13.value}`);

/*--------------------------------------------------------------------*/
