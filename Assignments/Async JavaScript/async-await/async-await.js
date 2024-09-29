const postsDiv = document.getElementById("posts");

document.getElementById("asyncButton").addEventListener("click", ()=>{
    postsDiv.innerHTML = (
        "Loading..."
    )
    fetchData();
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