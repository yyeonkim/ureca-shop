import styles from "@/styles/Main.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img src="/slides/slide1.jpg" alt="Gold big hoops" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slides/slide2.jpg" alt="Fast fashion, and faster fashion" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
