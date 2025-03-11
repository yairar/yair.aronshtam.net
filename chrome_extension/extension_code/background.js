async function fetchPhotoList() {
    try {
      let response = await fetch("https://yair.aronshtam.net/chrome_extension/golanphotos/all_images.json");
      let data = await response.json();  // Parse JSON
  
      // Convert to full URLs
      let photos = data.photos.map(photo => ({
        url: `https://yair.aronshtam.net/chrome_extension/golanphotos/${photo.f}`,
        title: photo.t,
      }));
  
      // Store in local storage
      chrome.storage.local.set({ photos });
  
      console.log("Fetched photos:", photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }
  
  // Fetch on startup
  fetchPhotoList();
  