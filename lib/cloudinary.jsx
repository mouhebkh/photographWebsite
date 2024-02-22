import axios from "axios";

export async function fetchData(nextCursor) {
  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
      {
        params: {
          type: "upload",
          prefix: "images", // Specify the "Images" folder as the prefix
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

// fetch gallery images
export async function fetchGalleryData(nextCursor) {
  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
      {
        params: {
          type: "upload",
          prefix: "Gallery", // Specify the "Images" folder as the prefix
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

// fetch gallery images
export async function fetchCarouselData(nextCursor) {
  try {
    const response = await axios.get(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
      {
        params: {
          type: "upload",
          prefix: "Carousel", // Specify the "Images" folder as the prefix
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

// map resource Images
export function mapResourcesToImages(resources) {
  return resources.map((resource) => ({
    id: resource.asset_id,
    title: resource.public_id,
    image: resource.secure_url,
    width: resource.width,
    height: resource.height,
    folder: resource.folder,
  }));
}
