import axios from "axios";

const CLOUDINARY_API_ENDPOINT = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;

export default async function handler(req, res) {
  try {
    let nextCursor = null;
    let bookImages = [];
    
    do {
      const response = await axios.get(CLOUDINARY_API_ENDPOINT, {
        params: {
          type: "upload",
          prefix: "ArtBooks/",
          next_cursor: nextCursor,
          // Append a unique query parameter
          timestamp: Date.now() // Or use any other unique identifier
        },
        headers: {
          Authorization: `Basic ${Buffer.from(
              `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_SECRET_KEY}`
          ).toString("base64")}`,
          // Add cache-control headers to prevent caching
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      
      bookImages = [...bookImages, ...response.data.resources];
      nextCursor = response.data.next_cursor;
    } while (nextCursor);
    
    if (bookImages.length === 0) {
      return res.status(404).json({ error: "No book images found" });
    }
    
    // Filter out duplicate images and exclude cached images
    const uniqueBookImages = bookImages
      .filter(image => !image.url.includes("timestamp")) // Modify this to your timestamp parameter
      .filter(image => !image.url.includes("version")) // Or modify for version parameter
      .map((image) => ({
        public_id: image.public_id,
        secure_url: image.secure_url,
        format: image.format
      }));

    const bookData = uniqueBookImages.map((image) => {
      const bookName = image.public_id
        .replace(/^Books\//, "")
        .replace(/\.(jpg|jpeg|png|gif|pdf)$/, "");
      const isPdf = image.format === "pdf";
      const pdfUrl = isPdf ? image.secure_url : null;
      return {
        title: bookName,
        titleImageUrl: isPdf ? null : image.secure_url,
        pdfUrl: pdfUrl,
      };
    });

    console.log("Fetch Book Data:", bookData);
    res.status(200).json(bookData);
  } catch (error) {
    console.error("Error fetching book data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
