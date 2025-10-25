function toggleTheme() {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}

function likeResource(id) {
    let likes = parseInt(localStorage.getItem(`likes-${id}`) || 0);
    likes++;
    localStorage.setItem(`likes-${id}`, likes);
    document.getElementById(`likes-${id}`).textContent = likes;
}

function favResource(id) {
    let favs = parseInt(localStorage.getItem(`favs-${id}`) || 0);
    favs++;
    localStorage.setItem(`favs-${id}`, favs);
    document.getElementById(`favs-${id}`).textContent = favs;
}

function downloadResource(id) {
    let dls = parseInt(localStorage.getItem(`dls-${id}`) || 0);
    dls++;
    localStorage.setItem(`dls-${id}`, dls);
    document.getElementById(`dls-${id}`).textContent = dls;
}

function addComment(id) {
    const commentInput = document.getElementById(`comment-${id}`);
    const comment = commentInput.value.trim();
    if (comment) {
        const commentsDiv = document.getElementById(`comments-${id}`);
        const commentElem = document.createElement('div');
        commentElem.textContent = comment;
        commentElem.style.padding = '5px';
        commentElem.style.borderBottom = '1px solid #444';
        commentsDiv.appendChild(commentElem);
        commentInput.value = '';
        
        let comments = JSON.parse(localStorage.getItem(`comments-${id}`) || '[]');
        comments.push(comment);
        localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
    }
}

function showLogin() {
    alert('登录功能 - 开发中');
}

function showUpload() {
    alert('上传功能 - 开发中');
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') document.body.classList.add('light');
    
    // 加载保存的数据
    for (let i = 1; i <= 1; i++) {
        document.getElementById(`likes-${i}`).textContent = localStorage.getItem(`likes-${i}`) || 0;
        document.getElementById(`favs-${i}`).textContent = localStorage.getItem(`favs-${i}`) || 0;
        document.getElementById(`dls-${i}`).textContent = localStorage.getItem(`dls-${i}`) || 0;
        
        const comments = JSON.parse(localStorage.getItem(`comments-${i}`) || '[]');
        const commentsDiv = document.getElementById(`comments-${i}`);
        comments.forEach(comment => {
            const commentElem = document.createElement('div');
            commentElem.textContent = comment;
            commentElem.style.padding = '5px';
            commentElem.style.borderBottom = '1px solid #444';
            commentsDiv.appendChild(commentElem);
        });
    }
});