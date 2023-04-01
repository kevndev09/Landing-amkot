window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset;
    var sectionTwo = document.querySelector('#section-card').offsetTop;
    
    if (scrollTop > sectionTwo) {
        document.querySelector('.card').style.transition = 'all 0.5s ease-out';
       document.querySelector('.card').style.transform = 'translateY(-125px)';
    } else {
       document.querySelector('.card').style.transform = 'translateY(0)';
    }
 });