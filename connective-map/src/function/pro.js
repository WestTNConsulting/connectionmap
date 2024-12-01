
  export function getLinkedInUrl(name) {
    // Convert the name to lowercase, replace spaces with dashes, and remove special characters
    const cleanName = name
      .toLowerCase()
      .replace(/ /g, '') // Remove spaces
      .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters except dashes
  
    return `https://linkedin.com/in/${cleanName}`;

  }
  export function getLinkedInProfileImage(linkedinUrl) {
    // Example: Extract profile image URL from LinkedIn (assuming a predefined structure)
    // This is a placeholder since LinkedIn's official API or scraping is required to get the actual image
  
    const linkedinProfileId = linkedinUrl.split('/').pop();  // Extract LinkedIn ID from URL
    const profileImageUrl = `https://www.linkedin.com/in/${linkedinProfileId}/profile-image-url`; // Hypothetical URL format
    return profileImageUrl;
  }
  
  