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
document.addEventListener("DOMContentLoaded", () => {
    // Büyüteç simgesini seçiyoruz
    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.getElementById("search-box");

    // Büyüteç simgesine tıklanınca arama kutusunu aç/kapat
    searchIcon.addEventListener("click", () => {
        if (searchBox.style.display === "none" || searchBox.style.display === "") {
            searchBox.style.display = "block"; // Göster
        } else {
            searchBox.style.display = "none"; // Gizle
        }
    });
});
// Enter'a basıldığında arama yapma işlevi
function handleSearch(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}

// Arama işlemini gerçekleştirme
// Arama işlemini gerçekleştirme
function performSearch() {
    const searchInput = document.getElementById("search-input").value.trim();
    const searchStatus = document.getElementById("search-status"); // Durum yazısını seçiyoruz

    if (searchInput) {
        // Burada arama işlemi yapılır
        console.log("Aranıyor:", searchInput);

        // "Aranıyor..." mesajını ekranda gösterebiliriz (örneğin bir div ile)
        searchStatus.style.display = "block"; // Yazıyı göster

        // Arama tamamlandıktan sonra 2 saniye sonra yazıyı gizle
        setTimeout(() => {
            searchStatus.style.display = "none"; // Yazıyı gizle
        }, 2000); // 2 saniye simülasyonu
    } else {
        // Eğer arama kutusu boşsa, yazıyı gizle
        searchStatus.style.display = "none";
    }
}
// Blog sayfasındaki dinamik verileri doldurmak için bir JSON örneği:
const blogData = {
    title: "Nasıl Daha Verimli Kod Yazılır?",
    author: "Ali Veli",
    date: "23 Kasım 2024",
    image: "https://via.placeholder.com/800x400",
    content: `
      <p>Verimli kod yazmak, yazılım geliştirme dünyasında önemli bir beceridir. 
      Bu yazıda, kod yazımınızı geliştirecek en iyi uygulamaları paylaşacağız.</p>
      
      <h2>Neden Verimli Kod?</h2>
      <p>Temiz ve verimli kod, daha az hata yapmanızı, daha hızlı geliştirme süreçleri oluşturmanızı sağlar. 
      Ayrıca ekip arkadaşlarınızın projede daha rahat çalışmasına olanak tanır.</p>
    `
  };
  
  // Blog verilerini DOM'a aktar
  document.getElementById("blog-title").innerText = blogData.title;
  document.getElementById("blog-author").innerText = blogData.author;
  document.getElementById("blog-date").innerText = blogData.date;
  document.getElementById("blog-image").src = blogData.image;
  document.getElementById("blog-body").innerHTML = blogData.content;

// Sayfa yüklendiğinde tema tercihini kontrol et ve uygula
window.onload = function() {
    const savedTheme = localStorage.getItem('theme'); // Kaydedilen temayı al
    if (savedTheme) {
        document.body.className = savedTheme; // Eğer varsa, kaydedilen temayı uygula
    }
};

// Renk seçici pencereyi açma/kapama
function toggleColorPicker() {
    const picker = document.getElementById('colorPicker');
    picker.style.display = picker.style.display === 'block' ? 'none' : 'block';
}

// Tema değişimi
function changeTheme(theme) {
    const body = document.body;

    // Temaya göre renkleri değiştir
    if (theme === 'opinorKlasik') {
        body.className = 'opinor-klasik';
        localStorage.setItem('theme', 'opinor-klasik'); // Temayı kaydet
    } else if (theme === 'opinorKoyu') {
        body.className = 'opinor-koyu';
        localStorage.setItem('theme', 'opinor-koyu'); // Temayı kaydet
    } else if (theme === 'opinorAcik') {
        body.className = 'opinor-acik';
        localStorage.setItem('theme', 'opinor-acik'); // Temayı kaydet
    }

    // Renk seçici pencereyi kapat
    toggleColorPicker();
}
  

  



