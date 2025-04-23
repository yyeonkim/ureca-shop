import useGetProducts from "@/hooks/useGetProducts.js";
import useIsMobile from "@/hooks/useIsMobile.js";
import styles from "@/styles/ProductSwiper.module.css";
import { useLoaderData } from "react-router";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard.jsx";

const CUSTOM_MAX_TRANSLATE = -3698;
const DEFAULT_MAX_TRANSLATE = -3658;

function ProductSwiper() {
  const { product } = useLoaderData();
  const isMobile = useIsMobile();

  const { data: similarProds, isLoading } = useGetProducts({
    params: { category: product.category, id_ne: product.id },
  });

  return (
    <Swiper
      className={styles.similarSwiper}
      navigation={isMobile ? false : true}
      slidesPerView={isMobile ? 2.4 : 3}
      spaceBetween={isMobile ? 12 : 54}
      modules={[Navigation]}
      onSlideChange={(swiper) => {
        if (isMobile && swiper.translate <= DEFAULT_MAX_TRANSLATE) {
          swiper.setTranslate(CUSTOM_MAX_TRANSLATE);
        }
      }}
    >
      {!isLoading &&
        similarProds.map((item) => (
          <SwiperSlide>
            <ProductCard key={item.id} className={styles.prodCard} product={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default ProductSwiper;
