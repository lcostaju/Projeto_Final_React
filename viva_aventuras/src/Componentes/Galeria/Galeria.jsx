
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './Galeria.module.css';

const imagens = [
  '/image/galeria_1.png',
  '/image/galeria_2.png',
  '/image/galeria_3.png',
  '/image/galeria_4.png',
  '/image/galeria_5.png',
  '/image/galeria_6.png',
  '/image/galeria_7.png',
  '/image/galeria_8.png',
  '/image/galeria_9.png',
  '/image/galeria_10.png',
];

function Galeria() {
  const [modalImg, setModalImg] = useState(null);
  const [modalIdx, setModalIdx] = useState(null);

  const openModal = (src, idx) => {
    setModalImg(src);
    setModalIdx(idx);
  };
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setModalImg(null);
  };
  const prevImg = (e) => {
    e.stopPropagation();
    setModalIdx((prev) => {
      const newIdx = prev === 0 ? imagens.length - 1 : prev - 1;
      setModalImg(imagens[newIdx]);
      return newIdx;
    });
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setModalIdx((prev) => {
      const newIdx = prev === imagens.length - 1 ? 0 : prev + 1;
      setModalImg(imagens[newIdx]);
      return newIdx;
    });
  };

  return (
    <section className={styles.galeriaSection} id="galeria">
      <h2 className={styles.galeriaTitulo}>Galeria Viva Aventuras</h2>
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        loop={true}
        // autoplay={{ delay: 1800, disableOnInteraction: false }}
        // speed={600}
        // modules={[Autoplay]}
        breakpoints={{
          1200: { slidesPerView: 4 },
          900: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }}
      >
        {imagens.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.galeriaItem} onClick={() => openModal(src, idx)} style={{ cursor: 'pointer' }}>
              <img src={src} alt={`Galeria Viva Aventuras ${idx + 1}`} className={styles.galeriaImg} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {modalImg && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <button className={styles.modalArrowLeft} onClick={prevImg} aria-label="Imagem anterior">&#8592;</button>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={() => setModalImg(null)}>&times;</button>
            <img src={modalImg} alt="Imagem ampliada" className={styles.modalImg} />
          </div>
          <button className={styles.modalArrowRight} onClick={nextImg} aria-label="Próxima imagem">&#8594;</button>
        </div>
      )}
    </section>
  );
}

export default Galeria;