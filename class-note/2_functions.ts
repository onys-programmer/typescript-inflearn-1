// 함수의 파라미터에 타입 정의하는 방식
function sum2(a: number, b: number) {
  return a + b;
}

sum(10, 34);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 둘 다 적용 가능

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {

}

log('hello world');
log('hello ts', 'abc');