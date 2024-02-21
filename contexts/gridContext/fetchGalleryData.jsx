import { getRequest } from "@/public/Utills/allRequests";

export const fetchGalleryImage = async (setGalleryData, setLoadingGallery) => {
    setLoadingGallery(true);
    try {
        const response = await getRequest("/api/gallery");
        setGalleryData(response.data);
    } catch (error) {
        console.error("Error fetching photos data:", error);
    } finally {
        setLoadingGallery(false);
    }
};