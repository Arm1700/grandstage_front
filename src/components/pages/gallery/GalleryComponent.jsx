import React, { useState, useCallback, useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import { DataContext } from '../context/DataProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryComponent = ({ galleries }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { getImageUrl, loading } = useContext(DataContext);

    const shouldEnableLoop = galleries.length > 3;
    const swiperRef5 = useRef(null);
    const handleImageClick = useCallback((index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedImageIndex(0);
    }, []);

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 pt-5">
                {loading ? (
                    Array(6).fill().map((_, index) => (
                        <div key={`skeleton-${index}`} className="rounded relative overflow-hidden ">
                            <Skeleton
                                height="100%"
                                width="100%"aspect-h-3
                                style={{ aspectRatio: '1/1' }}
                            />
                        </div>
                    ))
                ) : (
                    galleries.map((gallery, index) => (
                        <div
                            key={gallery.id}
                            className="opacityPopularCourse rounded cursor-pointer relative overflow-hidden aspect-w-1 "
                        >
                            <img
                                src={getImageUrl(gallery.img)}
                                alt={gallery.title || "Gallery Image"}
                                className="object-cover w-full h-full transition-transform duration-300"
                            />
                            <div
                                className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-60 transition-opacity duration-300"
                                onClick={() => handleImageClick(index)}
                            >
                                <div className="flex justify-center items-center h-full">
                                    <IoSearch className="text-white text-[30px] transition-transform duration-300 transform" />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Модальное окно */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={handleModalClick}
                >
                    <div className="custom-button-prev4 transition-all duration-300 hover:scale-[1.2]" onClick={() => swiperRef5.current?.slidePrev()}>
                        &lt;
                    </div>
                    <div className="relative w-full h-full max-w-5xl max-h-[90%] flex items-center justify-center">
                        <Swiper
                            loop={shouldEnableLoop}
                            initialSlide={selectedImageIndex}
                            modules={[Navigation, A11y]}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.custom-button-next3',
                                prevEl: '.custom-button-prev3',
                            }}
                            onSwiper={(swiper) => {
                                swiperRef5.current = swiper;
                            }}
                            onSlideChange={(swiper) => setSelectedImageIndex(swiper.activeIndex)}
                        >
                            {galleries.map(({ id, img }) => (
                                <SwiperSlide key={id}>
                                    <div className="flex justify-center items-center h-[80vh]">
                                        <img src={getImageUrl(img)} alt={`Certificate ${id}`}
                                            className="max-w-full max-h-full object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-button-next4 transition-all duration-300 hover:scale-[1.2]" onClick={() => swiperRef5.current?.slideNext()}>
                            &gt;
                        </div>
                        <button
                            onClick={closeModal}
                            className="z-50 top-4 right-4 absolute text-white text-[32px] hover:text-red-500"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryComponent;
