export default function throttle(callback, delay) {
  let timerId;

  return (...args) => {
    if (timerId) return; // 이미 실행된 함수가 있으면 그냥 종료
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null; // delay 경과 후 callback을 실행하면 timerId 초기화
    }, delay);
  };
}
