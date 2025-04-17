/**
 * 스로틀
 * @param {Function} callback - 호출할 이벤트 핸들러
 * @returns {Function} 스로틀 처리된 이벤트 핸들러
 * @description
 * delay 동안 연속해서 이벤트가 발생해도 한 번만 이벤트 핸들러를 수행한다.
 */
export default function throttle(callback, delay = 300) {
  let timerId;

  return (...args) => {
    if (timerId) return; // 이미 실행된 함수가 있으면 그냥 종료
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null; // delay 경과 후 callback을 실행하면 timerId 초기화
    }, delay);
  };
}
