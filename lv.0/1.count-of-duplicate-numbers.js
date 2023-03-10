// 프로그래머스 Lv.0 중복된 숫자 개수 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript

function solution(array, n) {
  return array.filter((element) => element == n).length
}
