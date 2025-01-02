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


function renderPosts() {
    const blogList = document.getElementById("blog-list");
    blogList.innerHTML = ""; 


    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const postsToShow = blogPosts.slice(start, end);

  
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

   
    document.getElementById("page-number").textContent = currentPage;

  
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === Math.ceil(blogPosts.length / postsPerPage);
}


document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPosts();
    }
});


document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) {
        currentPage++;
        renderPosts();
    }
});


renderPosts();

document.addEventListener("DOMContentLoaded", () => {
    
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
    
    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.getElementById("search-box");

   
    searchIcon.addEventListener("click", () => {
        if (searchBox.style.display === "none" || searchBox.style.display === "") {
            searchBox.style.display = "block";
        } else {
            searchBox.style.display = "none"; 
        }
    });
});

function handleSearch(event) {
    if (event.key === "Enter") {
        performSearch();
    }
}


function performSearch() {
    const searchInput = document.getElementById("search-input").value.trim();
    const searchStatus = document.getElementById("search-status"); 

    if (searchInput) {
       
        console.log("Aranıyor:", searchInput);

        searchStatus.style.display = "block"; 

        setTimeout(() => {
            searchStatus.style.display = "none"; 
        }, 2000);
    } else {
        
        searchStatus.style.display = "none";
    }
}

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
  
 
  document.getElementById("blog-title").innerText = blogData.title;
  document.getElementById("blog-author").innerText = blogData.author;
  document.getElementById("blog-date").innerText = blogData.date;
  document.getElementById("blog-image").src = blogData.image;
  document.getElementById("blog-body").innerHTML = blogData.content;


window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme; 
    }
};


function toggleColorPicker() {
    const picker = document.getElementById('colorPicker');
    picker.style.display = picker.style.display === 'block' ? 'none' : 'block';
}


function changeTheme(theme) {
    const body = document.body;

    
    if (theme === 'opinorKlasik') {
        body.className = 'opinor-klasik';
        localStorage.setItem('theme', 'opinor-klasik'); 
    } else if (theme === 'opinorKoyu') {
        body.className = 'opinor-koyu';
        localStorage.setItem('theme', 'opinor-koyu'); 
    } else if (theme === 'opinorAcik') {
        body.className = 'opinor-acik';
        localStorage.setItem('theme', 'opinor-acik'); 
    }

   
    toggleColorPicker();
}
  

  



