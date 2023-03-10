// 프로그래머스 Lv.0 머쓱이보다 키 큰 사람 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript

function solution(array, height) {
  return array.filter((element) => element > height).length
}
