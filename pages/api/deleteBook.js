const axios = require('axios');

// Cloudinary credentials
const cloudName = 'dkdhpf1mu';
const apiKey = '963867778422889';
const apiSecret = 'YhNtQMg5yVDiVp9upc4BiBmgQh4';

// Image filename to search for
const filename = 'BetweenPhotosBook';

// Construct Cloudinary search URL
const cloudinarySearchUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;

// Config for the search request
const searchConfig = {
  params: {
    api_key: apiKey,
    api_secret: apiSecret,
    max_results: 1,
    type: 'upload',
    prefix: 'Books/', // Change this if the image is not in the 'Books' folder
    context: true,
    expression: `filename:${filename}`,
  },
};

// Send SEARCH request to Cloudinary
axios.get(cloudinarySearchUrl, searchConfig)
  .then(response => {
    // Check if image was found
    if (response.data.resources.length > 0) {
      const publicId = response.data.resources[0].public_id;
      console.log('Image found. Public ID:', publicId);

      // Construct Cloudinary delete URL
      const cloudinaryDeleteUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy/${publicId}`;

      // Config for the DELETE request
      const deleteConfig = {
        auth: {
          username: apiKey,
          password: apiSecret
        }
      };

      // Send DELETE request to Cloudinary
      return axios.delete(cloudinaryDeleteUrl, deleteConfig);
    } else {
      console.error('Image not found.');
      return Promise.reject('Image not found.');
    }
  })
  .then(deleteResponse => {
    console.log('Image deleted:', deleteResponse.data);
  })
  .catch(error => {
    console.error('Error deleting image:', error.message);
  });
