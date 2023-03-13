// 프로그래머스 Lv.0 분수의 덧셈 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120808?language=javascript

function solution(numer1, denom1, numer2, denom2) {
  // 두 분모의 최소공배수를 찾습니다.
  const lcm = (denom1 * denom2) / gcd(denom1, denom2)

  // 두 분자를 공통 분모로 만들어 더합니다.
  const numer = numer1 * (lcm / denom1) + numer2 * (lcm / denom2)

  // 결과 분수를 기약분수로 만듭니다.
  const gcdResult = gcd(numer, lcm)
  const reducedNumer = numer / gcdResult
  const reducedDenom = lcm / gcdResult

  // 분자와 분모를 순서대로 담은 배열로 결과를 반환합니다.
  return [reducedNumer, reducedDenom]
}

// 유클리드 알고리즘을 사용하여 두 수의 최대공약수를 구합니다.
function gcd(a, b) {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}
