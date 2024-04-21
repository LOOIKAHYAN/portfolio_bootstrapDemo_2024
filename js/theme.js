// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('color-mode');
    // Toggle icon based on current theme
    var themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('color-mode')) {
      themeIcon.classList.remove('bi-droplet-half');
      themeIcon.classList.add('bi-sun');
    } else {
      themeIcon.classList.remove('bi-sun');
      themeIcon.classList.add('bi-droplet-half');
    }
  });

  function toggleTheme() {
    var body = document.body;
    body.classList.toggle("color-mode");
    body.classList.toggle("light-mode");
}