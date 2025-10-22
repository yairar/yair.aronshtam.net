
function faviconURL(u) 
{
    const url = new URL(chrome.runtime.getURL('/_favicon/'));
    url.searchParams.set('pageUrl', u); // this encodes the URL as well
    url.searchParams.set('size', '16');
    return url.toString();
}

// Given an array of URLs, build a list of these URLs
function buildMostVisitedDiv(mostVisitedURLs)
{
    const div = document.getElementById('mostVisited');
    const ol = div.appendChild(document.createElement('ol'));
      
    for (let i = 0; i < mostVisitedURLs.length; i++) 
    {
        const li = ol.appendChild(document.createElement('li'));
        const a = li.appendChild(document.createElement('a'));
        a.href = mostVisitedURLs[i].url;
        a.appendChild(document.createTextNode(mostVisitedURLs[i].title.substr(0,20)));
        
        const img = document.createElement('img');
        img.src = faviconURL(mostVisitedURLs[i].url);
        li.appendChild(img);
    }
}

const mainPhoto = document.getElementById("main-photo");
const bgBlur = document.getElementById("bg-blur");

chrome.storage.local.get("photos", (data) => {
    if (data.photos && data.photos.length > 0) {
        console.log(data.photos.length + " photos found in storage.");
        let randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];

        // Set background
        mainPhoto.src = randomPhoto.url;
        bgBlur.style.backgroundImage = `url('${randomPhoto.url}')`;

        // Display photo details
        let info = document.createElement("div");
        info.className = "photo-info";
        info.style.position = "absolute";
        info.style.zIndex = "10";
        info.style.bottom = "20px";
        info.style.left = "20px";
        info.style.padding = "10px";
        info.style.background = "rgba(0, 0, 0, 0.5)";
        info.style.color = "#fff";
        info.style.fontSize = "18px";
        info.style.borderRadius = "5px";
        info.innerHTML = `<a href="https://yair.aronshtam.net/" target="_blank" style="text-decoration: none;"><strong>${randomPhoto.title}</strong><br>${randomPhoto.location}</a>`;

        document.body.appendChild(info);
    } else {
        console.error("No photos found in storage.");
    }
  });

chrome.storage.sync.get(
    { fvs: 'hide' },
    (items) => {
        console.log(items.fvs);
        if (items.fvs == "show") {
            chrome.topSites.get(
                (topsites) => {
                    buildMostVisitedDiv(topsites);
                }
            );
        }
        else {
            const div = document.getElementById('fvs');
            div.style.display = 'none';
        }
    }
);

function resizeImage() {
    if (!mainPhoto.complete || !mainPhoto.naturalWidth) return;

    const windowW = window.innerWidth;
    const windowH = window.innerHeight;
    const imgW = mainPhoto.naturalWidth;
    const imgH = mainPhoto.naturalHeight;

    // scale = min(ratioW, ratioH) => contain (full image visible)
    const scale = Math.min(windowW / imgW, windowH / imgH);

    const displayW = imgW * scale;
    const displayH = imgH * scale;

    mainPhoto.style.width = `${displayW}px`;
    mainPhoto.style.height = `${displayH}px`;
    mainPhoto.style.left = `${windowW / 2}px`;
    mainPhoto.style.top = `${windowH / 2}px`;

    // Debug logs
    console.log("\n[Resize Image]");
    console.log(`Browser: ${windowW} x ${windowH}`);
    console.log(`Image natural: ${imgW} x ${imgH}`);
    console.log(`Scale factor: ${scale.toFixed(3)}`);
    console.log(`Displayed: ${displayW.toFixed(0)} x ${displayH.toFixed(0)}`);
}

mainPhoto.onload = () => {
    mainPhoto.classList.add("loaded");
    resizeImage();
};

window.addEventListener("resize", resizeImage);