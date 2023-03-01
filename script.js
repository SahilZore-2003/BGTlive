fetch("https://api.cricapi.com/v1/currentMatches?apikey=c042a1a7-0240-4058-8ebb-1f0f9d00e146&offset=0")
.then(res => res.json())
.then(data =>
    document.querySelector('.matchcontent').innerHTML = 
`
<div class="flag">
<img src="${data.data[7].teamInfo[0].img}" alt="">
<span>V/S</span>
<img src="${data.data[7].teamInfo[1].img}" alt="">
</div>
<h2>${data.data[7].name}</h2>
<p>${data.data[7].venue}</p>
<h6>${data.data[7].date}</h6>
<h1><span>${data.data[7].score[0].r}</span>/<span>${data.data[7].score[0].w}</span></h1>
<h3>overs : ${data.data[7].score[0].o}</h3>
<h4>${data.data[7].score[0].inning}</h4>
<p>${data.data[7].status}</p>
`
);

    

