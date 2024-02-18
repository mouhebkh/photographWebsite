import { fetchVideoData, mapResourcesToVideos } from "@/lib/cloudinaryVideo";

export default async function galleryHandler(req, res) {
  try {
    let nextCursor = null;
    let allVideos = [];

    do {
      // Fetch data for the current page
      const result = await fetchVideoData(nextCursor);

      const { resources, next_cursor: newNextCursor } = result;

      // Append fetched images to the array
      allVideos = allVideos.concat(mapResourcesToVideos(resources));

      // Update nextCursor for the next page
      nextCursor = newNextCursor;
    } while (nextCursor); // Continue fetching until nextCursor is null

    //   console.log("Fetched all images:", allImages);

    res.status(200).json(allVideos);
  } catch (error) {
    console.error("Error fetching data from Cloudinary:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
