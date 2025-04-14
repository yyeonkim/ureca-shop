import MainButton from "@/components/MainButton.jsx";
import styles from "@/styles/Main.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slideImgs = [
  {
    src: "/slides/slide1.jpg",
    srcSet: "/slides/slide1-mobile.jpg",
    alt: "Gold big hoops",
  },
  {
    src: "/slides/slide2.jpg",
    srcSet: "/slides/slide2-mobile.jpg",
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
            <picture className={styles.swiperPicture}>
              {/* Mobile */}
              <source srcset={slide.srcSet} m media="(max-width: 768px)" />
              <img src={slide.src} alt={slide.alt} />
            </picture>
            <div className={styles.slideContent}>
              <h2>{slide.alt}</h2>
              <h3>$ 68,00</h3>
              <MainButton>View Product</MainButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className={styles.shopSection}>
        <div>
          <h2>Shop The Latest</h2>
          <span>
            <a href="/shop">View All</a>
          </span>
        </div>
      </section>
    </>
  );
}
