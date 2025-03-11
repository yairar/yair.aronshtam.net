
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

chrome.storage.local.get("photos", (data) => {
    if (data.photos && data.photos.length > 0) {
        console.log(data.photos.length + " photos found in storage.");
        let randomPhoto = data.photos[Math.floor(Math.random() * data.photos.length)];

        console.log(randomPhoto.url);
        
        document.body.style.backgroundImage = `url('${randomPhoto.url}')`;
            
        let footer = document.getElementById('footer');
        footer.appendChild(document.createTextNode(randomPhoto.title));
        
    } else {
        console.error("No photos found in storage.");
    }
});

chrome.storage.sync.get(
    { fvs: 'show' },
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