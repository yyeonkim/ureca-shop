import { Outlet } from "react-router";

export default function MainPage() {
  return (
    <div>
      <h2>MainPage</h2>
      <div>메인 비주얼 영역</div>
      <nav>
        <a href="/sub1">리스트1</a>
        <a href="/sub2">리스트2</a>
        <a href="#">리스트3</a>
      </nav>
      <Outlet />
    </div>
  );
}
