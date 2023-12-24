const API='';
const content=null||document.getElementById('content');
const options={
    method:'GET',
    headers:{'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key':'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'}
    };

async function fetchData(urlApi)
{const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;}

(async()=>{try
    {const videos=await fetchData(API);
    let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}

    `;

    content.innerHTML=view;
    }
    catch(error){
        console.log(error);

        }
    })();



/* 
const content= null || document.getElementById('content')

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCrTanUeJeDnKXcnSE9OsZoQ&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidA
        
        PI-Key': '67232f994amsh1763697e11bb0ecp11ad13jsn250717b2ff10',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

 try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
 
async function fetchData(urlApi){
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try{
        const videos= await fetchData(url)
        let view = `
        ${videos.items.map(video =>  `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title} 
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}

        `;
    content.innerHTML = view;
    }
    catch (error){
       
    }
})(); */