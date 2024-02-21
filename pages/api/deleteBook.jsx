import axios from 'axios';

export default async function handler(req, res) {
  const CLOUDINARY_API_ENDPOINT = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;

  if (req.method === 'DELETE') {
    const { title } = req.body;

    try {
      // Delete book PDF
      const pdfResponse = await axios.delete(`${CLOUDINARY_API_ENDPOINT}/${title}`, {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_SECRET_KEY}`
          ).toString('base64')}`,
        },
      });

      // // Delete book image
      // const imageResponse = await axios.delete(`${CLOUDINARY_API_ENDPOINT}/${title}.webp`, {
      //   headers: {
      //     Authorization: `Basic ${Buffer.from(
      //       `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_SECRET_KEY}`
      //     ).toString('base64')}`,
      //   },
      // });

      if (pdfResponse.status === 200) {
        return res.status(200).json({ message: 'Book and its image deleted successfully' });
      } else {
        return res.status(500).json({ error: 'Failed to delete book and its image' });
      }
    } catch (error) {
      console.error('Error deleting book and its image:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
