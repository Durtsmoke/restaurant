document.addEventListener("DOMContentLoaded", () => {
  /* ============================
     Mobile Search Toggle
  ============================ */
  const searchicon1 = document.querySelector('#searchicon1');
  const search1 = document.querySelector('#searchinput1');
  
  if (searchicon1 && search1) {
    // When search icon is clicked, show the search input container
    searchicon1.addEventListener('click', function () {
      search1.style.display = 'flex';
      searchicon1.style.display = 'none';
    });
    
    // Add listener to the inner srchicon for closing the search input
    const closeSearchIcon1 = search1.querySelector('.srchicon');
    if (closeSearchIcon1) {
      closeSearchIcon1.addEventListener('click', function () {
        search1.style.display = 'none';
        searchicon1.style.display = 'block';
      });
    }
  }
  
  /* ============================
     Desktop Search Toggle
  ============================ */
  const searchicon2 = document.querySelector('#searchicon2');
  const search2 = document.querySelector('#searchinput2');
  
  if (searchicon2 && search2) {
    searchicon2.addEventListener('click', function () {
      search2.style.display = 'flex';
      searchicon2.style.display = 'none';
    });
    
    // Close functionality for desktop search input
    const closeSearchIcon2 = search2.querySelector('.srchicon');
    if (closeSearchIcon2) {
      closeSearchIcon2.addEventListener('click', function () {
        search2.style.display = 'none';
        searchicon2.style.display = 'block';
      });
    }
  }
  
  /* ============================
     Old Mobile Menu Toggle
  ============================ */
  const bar = document.querySelector('.fa-bars');
  const cross = document.querySelector('#hdcross');
  const headerbar = document.querySelector('.headerbar');
  
  if (bar && cross && headerbar) {
    bar.addEventListener('click', function () {
      headerbar.style.display = 'flex';
      cross.style.display = 'block';
    });
  
    cross.addEventListener('click', function () {
      headerbar.style.display = 'none';
      cross.style.display = 'none';
    });
  }
  
  /* ============================
     New Mobile Menu Toggle Using IDs
  ============================ */
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobileMenu");
  
  if (menuOpen && menuClose && mobileMenu) {
    menuOpen.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      menuOpen.style.display = "none";
      menuClose.style.display = "block";
    });
  
    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
    });
  } else {
    console.error("Missing elements for menu toggle.");
  }
});


  window.addEventListener('load', () => {
    document.querySelector('.about-us-content').classList.add('show');
  });

  document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      guests: document.getElementById("guests").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzs7PDHOL6aYO6diUycU_2OmgvkAV5V1tzHd6VppXTuaRAcF9-kjRMyWyW681VNWjYU/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.text())
    .then(data => {
      alert("Booking successful!");
      document.getElementById("booking-form").reset();
    })
    .catch(error => {
      console.error("Error!", error.message);
      alert("Booking failed. Please try again.");
    });
  });


