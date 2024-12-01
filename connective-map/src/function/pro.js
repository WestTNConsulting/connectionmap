export function getImageUrl(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  export function getLinkedInUrl(name) {
    // Convert the name to lowercase, replace spaces with dashes, and remove special characters
    const cleanName = name
      .toLowerCase()
      .replace(/ /g, '-') // Replace spaces with dashes
      .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters except dashes
  
    return `https://linkedin.com/in/${cleanName}`;
  }
  