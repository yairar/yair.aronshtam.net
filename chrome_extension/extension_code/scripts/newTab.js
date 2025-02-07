
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

window.onload = async () => {
    
    let rand_index = Math.floor(Math.random() * all_images.length);
    let url = 'https://yair.aronshtam.net/chrome_extension/golanphotos/' + all_images[rand_index][0];
    console.log(url);
    
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url('+url+')';
        
    console.log(all_images[rand_index][0]);
    
    let footer = document.getElementById('footer');
    footer.appendChild(document.createTextNode(all_images[rand_index][1]));
    console.log(all_images[rand_index][1]);
    
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
        }
    );
};
