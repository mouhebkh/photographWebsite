import { getRequest } from "@/public/Utills/allRequests";

export const fetchPhotosData = async (setPhotosDate, setLoadingPhotos) => {
    setLoadingPhotos(true);
    try {
        const response = await getRequest("api/photos");
        setPhotosDate(response.data);
    } catch (error) {
        console.error("Error fetching photos data:", error);
    } finally {
        setLoadingPhotos(false);
    }
};