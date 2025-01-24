let name = JSON.parse(localStorage.getItem("playVideoTitle"));
let video = JSON.parse(localStorage.getItem("playVideo"));
let player = document.getElementById("player");
let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${video}`;
iframe.allow = "fullscreen"
iframe.width = "60%"
iframe.height = "auto"
player.append(iframe);

let title = document.getElementById("title");
title.innerText=`${name}`