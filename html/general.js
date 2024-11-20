const blogPosts = [
    { id: 1, title: "Blog Başlığı 1", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png"},
    { id: 2, title: "Blog Başlığı 2", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 3, title: "Blog Başlığı 3", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 4, title: "Blog Başlığı 4", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 5, title: "Blog Başlığı 5", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 6, title: "Blog Başlığı 6", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 7, title: "Blog Başlığı 7", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 8, title: "Blog Başlığı 8", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 9, title: "Blog Başlığı 9", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 10, title: "Blog Başlığı 10", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 11, title: "Blog Başlığı 11", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
    { id: 12, title: "Blog Başlığı 12", description: "Bu, blog yazısının kısa bir açıklamasıdır...", image: "Remove-bg.ai_1732007045903.png" },
];

const postsPerPage = 10;
let currentPage = 1;

// Blog yazılarını render et
function renderPosts() {
    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = ""; // Mevcut içerik temizlenir

    // Sayfa aralığını belirle
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToShow = blogPosts.slice(start, end);

    // Blog yazılarını render et
    postsToShow.forEach(post => {
        const blogCard = document.createElement("div");
        blogCard.className = "blog-card";

        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <a href="#" class="read-more">Devamını Oku</a>
            </div>
        `;
        blogList.appendChild(blogCard);
    });

    // Sayfa numarasını güncelle
    document.getElementById("page-number").textContent = currentPage;

    // Pagination butonlarını yönet
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === Math.ceil(blogPosts.length / postsPerPage);
}

// Önceki sayfaya git
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPosts();
    }
});

// Sonraki sayfaya git
document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) {
        currentPage++;
        renderPosts();
    }
});

// İlk render
renderPosts();

document.addEventListener("DOMContentLoaded", () => {
    // Tüm JavaScript kodunuz buraya
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            console.log("Önceki sayfa");
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            console.log("Sonraki sayfa");
        });
    }
});
// 'Ara' butonuna tıklanınca çalışacak fonksiyonu yazıyoruz
document.getElementById("search-button").addEventListener("click", function() {
    // Kullanıcıdan alınan yazıyı alıyoruz
    const searchText = document.getElementById("search-input").value;

    // Eğer kullanıcı boş bir arama yapmamışsa
    if (searchText.trim() !== "") {
        // Arama sonucunu gösteriyoruz
        document.getElementById("search-text").innerText = searchText;
        document.getElementById("search-result").style.display = "block";
    } else {
        // Eğer boşsa, arama sonucunu gizli tutuyoruz
        document.getElementById("search-result").style.display = "none";
    }
});
