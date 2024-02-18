import axios from "axios";

// Cloudinary API endpoint to list resources in the Book folder
const CLOUDINARY_API_ENDPOINT = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;

export default async function handler(req, res) {
  try {
    let nextCursor = null; // Initialize nextCursor to null

    // Fetch all book images from Cloudinary
    let bookImages = [];
    do {
      // Fetch book images from Cloudinary with pagination
      const response = await axios.get(CLOUDINARY_API_ENDPOINT, {
        params: {
          type: "upload",
          prefix: "Books", // Specify the "Books" folder as the prefix
          next_cursor: nextCursor, // Include nextCursor if provided
        },
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_SECRET_KEY}`
          ).toString("base64")}`,
        },
      });

      // Append fetched book images to the bookImages array
      bookImages = [...bookImages, ...response.data.resources];

      // Update nextCursor for pagination
      nextCursor = response.data.next_cursor;
    } while (nextCursor);

    if (bookImages.length === 0) {
      // Handle case where no book images are found
      return res.status(404).json({ error: "No book images found" });
    }

    // Extract book data
    const bookData = bookImages.map((image) => {
      const bookName = image.public_id
        .replace(/^Book\//, "")
        .replace(/\.(jpg|jpeg|png|gif|pdf)$/, "");
      const isPdf = image.format === "pdf"; // Check if the format is PDF
      const pdfUrl = isPdf ? image.secure_url : null;
      return {
        title: bookName,
        titleImageUrl: image.secure_url,
        pdfUrl: pdfUrl,
      };
    });

    console.log("Fetch Book Data:", bookData);
    // Send book data as JSON response
    res.status(200).json(bookData);
  } catch (error) {
    console.error("Error fetching book data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
