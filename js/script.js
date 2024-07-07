// Start JavaScript here

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuOpen = false;
  
    menuToggle.addEventListener('click', function(event) {
      event.preventDefault();
      menuOpen = !menuOpen;
  
      if (menuOpen) {
        mobileMenu.style.display = 'block';
        menuToggle.innerHTML = '<i class="fa-solid fa-times"></i>';
      } else {
        mobileMenu.style.display = 'none';
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  
    // Search overlay toggle functionality
    function toggleSearchOverlay() {
      const searchOverlay = document.getElementById('search-overlay');
      if (searchOverlay.style.display === 'flex') {
        searchOverlay.style.display = 'none';
      } else {
        searchOverlay.style.display = 'flex';
      }
    }
  
    // Desktop search link click event
    document.getElementById('search-link').addEventListener('click', function(event) {
      event.preventDefault();
      toggleSearchOverlay();
    });
  
    // Mobile menu search link click event
    document.getElementById('mobile-search-link').addEventListener('click', function(event) {
      event.preventDefault();
      toggleSearchOverlay();
    });
  
    // Close search overlay event
    document.getElementById('close-search').addEventListener('click', function() {
      document.getElementById('search-overlay').style.display = 'none';
    });
  
    // Close search overlay event for mobile menu
    document.getElementById('mobile-close-search').addEventListener('click', function() {
      document.getElementById('search-overlay').style.display = 'none';
    });
  
    // Input event for search functionality
    document.getElementById('search-input').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      if (query.length > 2) {
        // Simulating search results
        const results = [
          'Result 1',
          'Result 2',
          'Result 3'
        ].filter(item => item.toLowerCase().includes(query));
  
        displayResults(results);
      } else {
        document.getElementById('search-results').innerHTML = 'no search result';
      }
    });
  
    // Function to display search results
    function displayResults(results) {
      const resultsContainer = document.getElementById('search-results');
      resultsContainer.innerHTML = '';
      results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result;
        resultsContainer.appendChild(div);
      });
    }   
  });
  