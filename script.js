// 资源数据 - 使用GitHub仓库存储
class MCResourceManager {
    constructor() {
        this.resources = [];
        this.currentUser = null;
        this.init();
    }

    async init() {
        await this.loadResources();
        this.renderResources();
        this.setupEventListeners();
    }

    async loadResources() {
        // 这里将从GitHub仓库加载资源数据
        // 暂时使用示例数据
        this.resources = [
            {
                id: 1,
                name: "高清材质包",
                category: "texture",
                description: "128x分辨率的高清材质",
                downloadUrl: "#",
                uploader: "管理员",
                likes: 24,
                downloads: 156
            },
            {
                id: 2,
                name: "工业模组",
                category: "mod",
                description: "添加工业自动化系统",
                downloadUrl: "#",
                uploader: "玩家A",
                likes: 42,
                downloads: 289
            }
        ];
    }

    renderResources() {
        const grid = document.getElementById('resourcesGrid');
        grid.innerHTML = this.resources.map(resource => `
            <div class="resource-card" data-category="${resource.category}">
                <h3>${resource.name}</h3>
                <p>${resource.description}</p>
                <div class="resource-meta">
                    <span>上传者: ${resource.uploader}</span>
                    <span>❤️ ${resource.likes}</span>
                    <span>⬇️ ${resource.downloads}</span>
                </div>
                <div class="resource-actions">
                    <button class="btn btn-primary" onclick="downloadResource(${resource.id})">
                        下载
                    </button>
                    <button class="btn btn-secondary" onclick="likeResource(${resource.id})">
                        点赞
                    </button>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // 工具栏分类筛选
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterResources(category);
            });
        });

        // 上传表单提交
        document.getElementById('uploadForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUpload();
        });

        // 登录表单提交
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    filterResources(category) {
        const cards = document.querySelectorAll('.resource-card');
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // 更新工具栏激活状态
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
    }

    handleUpload() {
        const formData = new FormData(document.getElementById('uploadForm'));
        console.log('上传资源:', Object.fromEntries(formData));
        alert('资源上传成功！（GitHub API集成待实现）');
        hideUploadForm();
    }

    handleLogin() {
        const formData = new FormData(document.getElementById('loginForm'));
        console.log('用户登录:', Object.fromEntries(formData));
        alert('登录成功！（GitHub OAuth集成待实现）');
        hideLoginForm();
    }
}

// 全局函数
function showUploadForm() {
    document.getElementById('uploadModal').style.display = 'block';
}

function hideUploadForm() {
    document.getElementById('uploadModal').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
}

function hideLoginForm() {
    document.getElementById('loginModal').style.display = 'none';
}

function downloadResource(id) {
    alert(`开始下载资源 #${id}`);
}

function likeResource(id) {
    alert(`点赞资源 #${id}`);
}

// 点击模态框外部关闭
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        hideUploadForm();
        hideLoginForm();
    }
});

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new MCResourceManager();
});