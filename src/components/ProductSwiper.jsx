import useGetProducts from "@/hooks/useGetProducts.js";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/ProductSwiper.module.css";
import { useLoaderData } from "react-router";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard.jsx";

function ProductSwiper() {
  const { product } = useLoaderData();
  const isMobile = useIsMobile();

  const { data: similarProds, isLoading } = useGetProducts({
    params: { category: product.category, id_ne: product.id },
  });

  return (
    <Swiper
      navigation={isMobile ? false : true}
      slidesPerView={isMobile ? 2.4 : 3}
      spaceBetween={isMobile ? 12 : 54}
      modules={[Navigation]}
      className={styles.similarSwiper}
    >
      {!isLoading &&
        similarProds.map((item) => (
          <SwiperSlide
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <ProductCard key={item.id} className={styles.prodCard} product={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default ProductSwiper;
