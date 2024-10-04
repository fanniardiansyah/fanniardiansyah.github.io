document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

// Menampilkan gambar dalam lightbox
function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = imageSrc;
}

// Menutup lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Mengatur tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();
