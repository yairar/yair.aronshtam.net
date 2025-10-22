async function fetchPhotoList() {
    try {
      let response = await fetch("https://yair.aronshtam.net/best_photos.json");
      let data = await response.json();  // Parse JSON
  
      // Convert to full URLs
      let photos = data.best_photos.map(photo => ({
        url: `https://yair.aronshtam.net/${photo.f}`,
        title: photo.t,
        location: photo.loc
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
  