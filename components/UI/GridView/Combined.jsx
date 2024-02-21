"use client";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingUI/LoadingSpinner";
import NoDataFound from "../LoadingUI/NoDataFound";
import { getRequest } from "@/public/Utills/allRequests";
import Carousel from "../Carousel/Carousel";
import GridView from "./GridView";
import { CarouselProvider } from "@/contexts/carouselContext/CarouselProvider";
import { fetchCarouselData } from "@/contexts/carouselContext/fetchCarouselData";
import { GalleryProvider } from "@/contexts/gridContext/GalleryProvider";
import { fetchGalleryImage } from "@/contexts/gridContext/fetchGalleryData";

export default function CombinedComponent() {
  const [galleryData, setGalleryData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [loadingCarousel, setLoadingCarousel] = useState(true);

  useEffect(() => {
    // Fetch Gallery Data
    fetchGalleryImage(setGalleryData, setLoadingGallery);

    // Fetch Carousel Data
    fetchCarouselData(setCarouselData, setLoadingCarousel);
  }, []);

  return (
    <>
      {loadingCarousel && loadingGallery ? (
        <div className="h-[100vh] pt-[10rem] flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : //   If both data is not available
      carouselData.length === 0 && galleryData.length === 0 ? (
        <div className="text-pink-800  text-5xl h-[80vh] flex justify-center items-center">
          <NoDataFound />
        </div>
      ) : carouselData.length === 0 ? ( //If carousel data is not available
        <GalleryProvider>
          <GridView data={galleryData} loading={loadingGallery} />
        </GalleryProvider>
      ) : galleryData.length === 0 ? ( //If gallery data is not available
        <CarouselProvider>
          <Carousel data={carouselData} loading={loadingCarousel} />
        </CarouselProvider>
      ) : (
        //If both data is available
        <>
          <CarouselProvider>
            <Carousel data={carouselData} loading={loadingCarousel} />
          </CarouselProvider>

          <GalleryProvider>
            <GridView data={galleryData} loading={loadingGallery} />
          </GalleryProvider>
        </>
      )}
    </>
  );
}
