import styles from "@/styles/MainSwiper.module.css";
import { useNavigate } from "react-router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MainButton from "./MainButton.jsx";

const slideImgs = [
  {
    src: "/slides/slide1.jpg",
    srcSetMoJPG: "/slides/slide1-mobile.jpg",
    srcSetMoWebP: "/slides/slide1-mobile.webp",
    srcSetPCWebP: "/slides/slide1.webp",
    alt: "Gold big hoops",
  },
  {
    src: "/slides/slide2.jpg",
    srcSetMoJPG: "/slides/slide2-mobile.jpg",
    srcSetWebP: "/slides/slide2-mobile.webp",
    srcSetPCWebP: "/slides/slide2.webp",
    alt: "Fast fashion, and faster fashion",
  },
];

function MainSwiper() {
  const navigate = useNavigate();

  return (
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
      role="group"
    >
      {slideImgs.map((slide, i) => (
        <SwiperSlide onClick={() => navigate("/shop")}>
          <picture className={styles.swiperPicture}>
            {/* Mobile WebP */}
            <source srcSet={slide.srcSetMoWebP} type="image/webp" media="(max-width: 768px)" />
            {/* Mobile JPG */}
            <source srcSet={slide.srcSetMoJPG} type="image/jpeg" media="(max-width: 768px)" />
            {/* Desktop WebP */}
            <source srcSet={slide.srcSetPCWebP} type="image/webp" media="(min-width: 768px)" />
            {/* Desktop JPG */}
            <img src={slide.src} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} />
          </picture>
          <div className={styles.slideContent}>
            <h2>{slide.alt}</h2>
            <h3>$ 68,00</h3>
            <MainButton>View Product</MainButton>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainSwiper;
