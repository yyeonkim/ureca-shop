/**
 * 디바운스
 * @param {Function} callback - 호출할 이벤트 핸들러
 * @returns {Function} 디바운스 처리된 이벤트 핸들러
 * @description
 * delay 동안 연속해서 이벤트가 발생하면 이벤트 핸들러를 호출하지 않다가
 * delay가 지난 후 이벤트 핸들러를 호출한다.
 */
export default function debounce(callback, delay = 300) {
  let timerId;

  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, ...args);
  };
}
