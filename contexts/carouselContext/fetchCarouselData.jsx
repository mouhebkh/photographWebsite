import { getRequest } from "@/public/Utills/allRequests";

export const fetchCarouselData = async (
  setCarouselData,
  setLoadingCarousel
) => {
  setLoadingCarousel(true);
  try {
    const response = await getRequest("/api/carousel");
    setCarouselData(response.data);
    console.log("Carousel Data:", response.data);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
  } finally {
    setLoadingCarousel(false);
  }
};
