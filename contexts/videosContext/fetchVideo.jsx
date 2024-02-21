import { getRequest } from "@/public/Utills/allRequests";

export const fetchVideosData = async (setCloudinaryData, setLoading) => {
    setLoading(true);

    try {
              const response = await getRequest("api/videos"); // Call the API route created in the server-side code
              setCloudinaryData(response.data); // Set fetched images to state
              console.log(response.data)
              setLoading(false); // Turn off loading state
              console.log("Fetched videos:", response.data);
            } catch (error) {
              console.error("Error fetching data from Cloudinary:", error);
            }
};