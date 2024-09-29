const postsDiv = document.getElementById("posts");

postsDiv.innerText = "Click on the button to see callback functionality."

document.getElementById("cbButton").addEventListener("click", ()=>{
    postsDiv.innerHTML = (
        "Results will be available after 5 seconds..."
    )
    setTimeout(()=>{
        postsDiv.innerText = "CallBack Executed after 5 seconds.";
        fetchData();
    }, 5000)
})

const fetchData = async() => {
    try {
        let data = await fetch('https://dummyjson.com/posts');
        data = await data.json();
        data = data.posts;
        const titles = data.map((el)=>{
             return el.title;
            })
            postsDiv.innerHTML = titles.join("<br>");
    } catch (error) {
        console.error("Error fetching data:", error);
        postsDiv.innerText = "Error fetching the data..."
    }
}