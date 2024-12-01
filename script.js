// Ambil elemen-elemen terkait tema
const lightModeIcon = document.getElementById("light-mode");
const darkModeIcon = document.getElementById("dark-mode");

// Memeriksa status tema yang dipilih sebelumnya (disimpan di localStorage)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  darkModeIcon.classList.remove("hidden"); // Tampilkan ikon mode gelap
  lightModeIcon.classList.add("hidden"); // Sembunyikan ikon mode terang
} else {
  document.body.classList.remove("dark-mode");
  darkModeIcon.classList.add("hidden"); // Sembunyikan ikon mode gelap
  lightModeIcon.classList.remove("hidden"); // Tampilkan ikon mode terang
}

// Fungsi untuk mengubah tema ke mode gelap
lightModeIcon.addEventListener("click", () => {
  console.log("Switching to dark mode");
  document.body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark");
  darkModeIcon.classList.remove("hidden");
  lightModeIcon.classList.add("hidden");
});

// Fungsi untuk mengubah tema ke mode terang
darkModeIcon.addEventListener("click", () => {
  console.log("Switching to light mode");
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  darkModeIcon.classList.add("hidden");
  lightModeIcon.classList.remove("hidden");
});

// Pilih elemen navbar
const navbar = document.querySelector(".navbar");

// Tambahkan event listener untuk mendeteksi scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Jika scroll lebih dari 50px
    navbar.classList.add("scrolled"); // Tambahkan kelas untuk efek
  } else {
    navbar.classList.remove("scrolled"); // Hapus kelas saat di bagian atas halaman
  }
});

// Menambahkan tahun otomatis ke footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
