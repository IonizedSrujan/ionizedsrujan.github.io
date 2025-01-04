// Blog data structure
const blogs = [
    {
        title: "My Experience Visiting Shriharikota",
        content: "I recently visited Shriharikota, India's spaceport, and it was an awe-inspiring experience! The tour of the launch pad, learning about ISRO's achievements, and witnessing the scale of operations was unforgettable.",
        date: "January 4, 2025"
    }
];

// Function to display blogs
function displayBlogs() {
    const blogPostsContainer = document.getElementById("blog-posts");
    blogPostsContainer.innerHTML = ""; // Clear existing posts

    blogs.forEach(blog => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("blog-post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = blog.title;

        const postDate = document.createElement("p");
        postDate.style.fontSize = "12px";
        postDate.style.color = "gray";
        postDate.textContent = blog.date;

        const postContent = document.createElement("p");
        postContent.textContent = blog.content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postDate);
        postDiv.appendChild(postContent);

        blogPostsContainer.appendChild(postDiv);
    });
}

// Load blogs on page load
document.addEventListener("DOMContentLoaded", displayBlogs);
