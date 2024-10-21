$(document).ready(function() {
    // Fungsi untuk menyesuaikan tampilan menu berdasarkan lebar jendela
    function adjustMenu() {
        var width = $(window).width(); // Mendapatkan lebar jendela saat ini
        if (width >= 990) { // Jika lebar jendela lebih besar atau sama dengan 990 piksel (desktop)
            $("nav .menu ul").show(); // Tampilkan menu
            $("body").removeClass("mobile-menu-open"); // Hapus kelas mobile-menu-open dari body
        } else { // Jika lebar jendela kurang dari 990 piksel (mobile)
            $("nav .menu ul").hide(); // Sembunyikan menu
        }
    }

    // Fungsi untuk toggle (menampilkan atau menyembunyikan) menu ketika tombol menu di klik
    $(".tombol-menu").click(function() {
        $(this).toggleClass("open"); // Tambah atau hapus kelas 'open' pada tombol menu
        $("nav .menu ul").slideToggle(); // Tampilkan atau sembunyikan menu dengan efek slide

        // Toggle kelas mobile-menu-open pada body
        $("body").toggleClass("mobile-menu-open");
        
        // Scroll ke bagian atas jika menu terbuka
        if ($(this).hasClass("open")) { // Jika tombol menu dalam keadaan terbuka
            $('html, body').animate({ scrollTop: 0 }, 300); // Gulir halaman ke atas dalam 300 milidetik
        }
    });

    // Menyesuaikan tampilan menu pada saat halaman dimuat dan saat jendela diubah ukurannya
    adjustMenu(); // Panggil fungsi untuk penyesuaian menu saat halaman dimuat
    $(window).resize(adjustMenu); // Tambahkan event listener untuk resize jendela
});
