let key = "AIzaSyCI-JspbcIxKAFeFRS4GnSw168oWQ--zco";

let container = document.getElementById("searchResult");

let trending = async () => {
    console.log("first")
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${key}&part=snippet&maxResults=20&regionCode=IN&chart=mostPopular`);
        let {items} = await res.json();
        showTrending(items);
    }
    catch(error){
        console.log(error)
    }
}
trending();

let showTrending = (videos) => {
    let container = document.getElementById("searchResult");
    videos.forEach(({id:{videoId}, snippet:{title}, snippet:{thumbnails:{medium:{url}}}}) =>{
        let wrapper = document.createElement("div");
        let thumb = document.createElement("img");
        thumb.src = url;
        thumb.addEventListener("click", () =>{
            localStorage.setItem("playVideo", JSON.stringify(videoId));
            localStorage.setItem("playVideoTitle", JSON.stringify(title));
            window.location = "video.html";
        })
        let name = document.createElement("h4");
        name.innerText = title;

        wrapper.append(thumb, title);
        container.append(wrapper)
        
    })
}


let getData = async () =>{
    
    try{
        let query = document.getElementById("query").value;
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${key}&part=snippet&part=contentDetails&maxResults=20`); 
        let { items } = await response.json();
        
        let arrayOfVideo = items;
        console.log(arrayOfVideo)
        appendVideo(arrayOfVideo);
        
    }
    catch (error){
        console.log(error);
    }
};
let btn = document.querySelector("#btn").addEventListener("click", getData);


let appendVideo = (data) => {
    container.innerHTML = "";
    data.forEach(({ snippet:{title},id:{ videoId }, snippet:{thumbnails:{medium:{url}}}}) => {
        //thumbnail
        //title
        // console.log(title,videoId);

        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = url;
        img.addEventListener("click", ()=>{
            localStorage.setItem("playVideo", (JSON.stringify(videoId)))
            localStorage.setItem("playVideoTitle", (JSON.stringify(title)))
            window.location="video.html"
        })
        
        let vtitle = document.createElement("h4");
        vtitle.innerText = title;

        div.append(img, vtitle);
        
        container.append(div);
        
    });
};



// let iframe = document.createElement("iframe");
        // iframe.src=`https://www.youtube.com/embed/${videoId}`;
        // iframe.width="100%";
        // iframe.height="100%";
        // iframe.allow="fullscreen"