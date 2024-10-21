function showContent(section) {
  const content = document.getElementById("content");
  const dashboard = document.getElementById("dashboard");
  const tugas = document.getElementById("tugas");

  if (section === "dashboard") {
    content.scrollTop = dashboard.offsetTop; // Scroll ke bagian dashboard
  } else if (section === "tugas") {
    content.scrollTop = tugas.offsetTop; // Scroll ke bagian tugas
  }
}

function setActive(link) {
  // Menghapus kelas 'active' dari semua tautan
  var links = document.querySelectorAll(".nav-link");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Menambahkan kelas 'active' ke tautan yang diklik
  link.classList.add("active");
}

// Secara otomatis mengaktifkan menu berdasarkan bagian yang terlihat saat menggulir
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  sections.forEach(function (section) {
    if (scrollPosition >= section.offsetTop - 70 && scrollPosition < section.offsetTop + section.offsetHeight - 70) {
      var currentId = section.getAttribute("id");
      var activeLink = document.querySelector('.nav-link[href="#' + currentId + '"]');
      setActive(activeLink);
    }
  });
});

// Mengalihkan visibilitas popup chat
function toggleChat() {
  const chatPopup = document.getElementById("chat-popup");
  if (chatPopup.style.display === "block") {
    chatPopup.style.display = "none";
  } else {
    chatPopup.style.display = "block";
  }
}

// Mengirim pesan
function sendMessage() {
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const messageText = input.value.trim();

  if (messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = messageText;

    // Menambahkan kelas untuk memisahkan pesan pengguna dan mentor
    messageDiv.classList.add("user"); // Menandakan ini adalah pesan pengguna

    messages.appendChild(messageDiv);
    input.value = ""; // Mengosongkan kolom input
    messages.scrollTop = messages.scrollHeight; // Auto-scroll ke bagian bawah

    // Simulasi pesan mentor (anda bisa menyesuaikan sesuai kebutuhan)
    setTimeout(() => {
      const mentorMessageDiv = document.createElement("div");
      mentorMessageDiv.textContent = "pesan ini dibalas oleh mentor."; // Contoh pesan mentor
      mentorMessageDiv.classList.add("mentor"); // Menandakan ini adalah pesan mentor
      messages.appendChild(mentorMessageDiv);
      messages.scrollTop = messages.scrollHeight; // Auto-scroll ke bagian bawah
    }, 1000); // Simulasi jeda sebelum mentor membalas
  }
}

/* sizebox menampilkan tertentu aja */
function toggleTasks() {
  const checkbox = document.getElementById("flexCheckDefault");
  const tasks = document.querySelectorAll(".task");

  tasks.forEach((task) => {
    // Menampilkan hanya tugas UTS dan UAS saat checkbox dicentang
    if (checkbox.checked) {
      if (task.dataset.task !== "UTS" && task.dataset.task !== "UAS") {
        task.style.display = "none"; // Sembunyikan tugas selain UTS dan UAS
      } else {
        task.style.display = "block"; // Tampilkan tugas UTS dan UAS
      }
    } else {
      // Menampilkan semua tugas saat checkbox tidak dicentang
      task.style.display = "block"; // Tampilkan semua tugas
    }
  });
}
