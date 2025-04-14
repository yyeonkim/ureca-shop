import styles from "@/styles/Main.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainButton from "../../components/MainButton.jsx";

const slideImgs = [
  {
    src: "/slides/slide1.jpg",
    alt: "Gold big hoops",
  },
  {
    src: "/slides/slide2.jpg",
    alt: "Fast fashion, and faster fashion",
  },
];

export default function MainPage() {
  return (
    <>
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
        {slideImgs.map((slide) => (
          <SwiperSlide>
            <img src={slide.src} alt={slide.alt} />
            <div className={styles.slideContent}>
              <h1>{slide.alt}</h1>
              <h2>$ 68,00</h2>
              <MainButton>View Product</MainButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className={styles.shopSection}>
        <div>
          <h2 className="h1">Shop The Latest</h2>
          <h4>
            <a href="/shop">View All</a>
          </h4>
        </div>
      </section>
    </>
  );
}
