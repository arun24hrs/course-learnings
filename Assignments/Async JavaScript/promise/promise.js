const postsDiv = document.getElementById("posts");

document.getElementById("promiseButton").addEventListener("click", ()=>{
    postsDiv.innerHTML = (
        "Loading..."
    );
    fetchData().then((res)=> {
        res = res.posts
        console.log(res)
        const titles = res.map((el)=>{
            return el.title;
           })
           postsDiv.innerHTML = titles.join("<br>")
    }).catch(error => {
        postsDiv.textContent = error;
    });
})

const fetchData = async() => {
    return new Promise((resolve, reject)=>{
        let time=setTimeout(()=>{
            reject('Operation timed out.');
        },5000)
        fetch('https://dummyjson.com/posts').then((res)=> res.json())
        .then((res)=>{
            clearTimeout(time);
            resolve(res);
        })
        .catch(() => {
            reject("Failed to fetch data");
        });
    })
    
}