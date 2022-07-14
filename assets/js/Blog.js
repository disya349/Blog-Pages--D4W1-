let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image")

    image = URL.createObjectURL(image.files[0])


    let blog = {
        title,
        content,
        image
    }

    blogs.push(blog)
    renderBlogs()
}

function renderBlogs() {
    console.log(blogs);

    let containerBlogs = document.getElementById("contents")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < blogs.length; i++) {
        containerBlogs.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
                <h1>
                    <a href="Blog Detail.html" target="_blank">${blogs[i].title}</a>
                </h1>
                
                <div class="detail-blog-content">
                    1 January 1970 25:00 WIB | Dicki Syafrudin
                </div>
                
                <p>
                    ${blogs[i].content}
                </p>

                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">1 hour ago</span>
                </div>
                
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
            </div>
        </div>
        `
    }
}

console.log(`Success`);