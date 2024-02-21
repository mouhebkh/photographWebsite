import { getRequest } from "@/public/Utills/allRequests";

export const fetchBooksData = async (setBooksData, setLoadingBooks) => {
  setLoadingBooks(true);
  try {
    const response = await getRequest("/api/books");
    setBooksData(response.data);
    console.log("Fetching Books Data:", response.data);
  } catch (error) {
    console.error("Error fetching Books data:", error);
  } finally {
    setLoadingBooks(false);
  }
};
