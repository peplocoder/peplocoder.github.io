document.addEventListener("DOMContentLoaded", () => {
    loadJSON('posts.json', renderPosts);
    loadJSON('projects.json', renderProjects);
});

function loadJSON(file, callback) {
    fetch(file)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(err => console.error(`Error loading ${file}:`, err));
}

function renderPosts(posts) {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
        const el = document.createElement('div');
        el.className = 'post';
        el.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>${post.date}</small>
        `;
        container.appendChild(el);
    });
}

function renderProjects(projects) {
    const container = document.getElementById('projects-list');
    projects.forEach(p => {
        const el = document.createElement('p');
        el.innerHTML = `<a href="${p.link}" target="_blank">${p.name}</a>`;
        container.appendChild(el);
    });
}