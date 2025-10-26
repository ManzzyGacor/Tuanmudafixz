document.addEventListener("DOMContentLoaded", function() {
  
  // --- Ambil elemen-elemen untuk Modal Payment ---
  var paymentModal = document.getElementById("paymentModal");
  var paymentBtn = document.getElementById("paymentBtn");
  var paymentCloseBtn = document.getElementsByClassName("close-btn")[0]; // Tombol 'x'
  var copyButtons = document.querySelectorAll(".copy-btn");
  
  // --- PERUBAHAN DI SINI: Logika untuk Notifikasi Toast ---
  var welcomeToast = document.getElementById("welcomeToast");
  var closeToastBtn = document.getElementById("closeToastBtn");
  var toastTimer; // Variabel untuk menyimpan timer auto-hide
  
  // Fungsi untuk menyembunyikan toast
  function hideToast() {
    if (welcomeToast.classList.contains("show")) {
      clearTimeout(toastTimer); // Hentikan auto-hide jika ditutup manual
      welcomeToast.classList.remove("show");
      welcomeToast.classList.add("hide");
    }
  }
  
  // Tampilkan toast setelah halaman dimuat (beri jeda sedikit)
  setTimeout(function() {
    if (welcomeToast) { // Pastikan elemennya ada
      welcomeToast.classList.add("show");
      
      // Atur timer untuk auto-hide setelah 5 detik
      toastTimer = setTimeout(hideToast, 5000);
    }
  }, 500); // Muncul setelah 0.5 detik
  
  // Tambahkan event listener ke tombol 'x' pada toast
  if (closeToastBtn) {
    closeToastBtn.onclick = hideToast;
  }
  // --- AKHIR PERUBAHAN ---
  
  
  // --- Logika untuk Modal Payment (Tidak Berubah) ---
  paymentBtn.onclick = function() {
    paymentModal.style.display = "flex";
  }
  
  paymentCloseBtn.onclick = function() {
    paymentModal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == paymentModal) {
      paymentModal.style.display = "none";
    }
    // Hapus logika klik luar untuk welcomeModal
  }
  
  // Fungsi untuk tombol "Salin" (Tidak Berubah)
  copyButtons.forEach(function(button) {
    button.onclick = function() {
      var textToCopy = button.getAttribute('data-clipboard-text');
      
      navigator.clipboard.writeText(textToCopy).then(function() {
        var originalText = button.innerHTML;
        button.innerHTML = "Tersalin!";
        
        setTimeout(function() {
          button.innerHTML = originalText;
        }, 2000);
        
      }).catch(function(err) {
        console.error('Gagal menyalin teks: ', err);
      });
    }
  });
  
});