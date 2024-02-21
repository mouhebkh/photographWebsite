import axios from "axios";

// Fetch videos from Cloudinary
export async function fetchVideoData(nextCursor) {
  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/video`,
      {
        params: {
          type: "upload",
          prefix: "Videos", // Specify the "Videos" folder as the prefix
          ...(nextCursor && { next_cursor: nextCursor }), // Include nextCursor if provided
        },
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_SECRET_KEY}`
          ).toString("base64")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Cloudinary:", error);
    throw error;
  }
}

// Map resources to videos
export function mapResourcesToVideos(resources) {
  return resources.map((resource) => ({
    id: resource.asset_id,
    title: resource.public_id,
    video: resource.secure_url,
    folder: resource.folder,
  }));
}
