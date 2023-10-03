function sumNumber(){
  return addNumber(1)(2)(3); // function 함수로 선언된 일반 함수의 경우 javascript가 실행되면서 메모리에 저장되기 때문에(호이스팅) 함수 선언 전, 후 상관없이 불러도 에러가 나지 않는다. 
  function addNumber(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
};
console.log(sumNumber());

function sumNumber() {
  //여기를 바꾸시오

  let addNumber = (a) => (b) => (c) => a + b + c; //function함수와 다르게 화살표 함수는 반드시 선언 및 정의 후에 함수를 불러야 에러가 나지 않음
  return addNumber(1)(2)(3);
}

console.log(sumNumber());
