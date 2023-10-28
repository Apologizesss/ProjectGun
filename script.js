document.querySelector('.hamburger').addEventListener('click', function() {
    const navItems = document.querySelector('.nav-items');
    if(navItems.style.display === 'none' || navItems.style.display === '') {
        navItems.style.display = 'flex';
    } else {
        navItems.style.display = 'none';
    }
});
