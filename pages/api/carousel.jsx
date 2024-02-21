import { mapResourcesToImages, fetchCarouselData } from "@/lib/cloudinary";

export default async function carouselHandler(req, res) {
  try {
    let nextCursor = null;
    let allImages = [];

    do {
      // Fetch data for the current page
      const result = await fetchCarouselData(nextCursor);

      const { resources, next_cursor: newNextCursor } = result;

      // Append fetched images to the array
      allImages = allImages.concat(mapResourcesToImages(resources));

      // Update nextCursor for the next page
      nextCursor = newNextCursor;
    } while (nextCursor); // Continue fetching until nextCursor is null

    //   console.log("Fetch Carousel images:", allImages);

    res.status(200).json(allImages);
  } catch (error) {
    console.error("Error fetching data from Cloudinary:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
