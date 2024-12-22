document.addEventListener('DOMContentLoaded', function() {
    // 添加导航栏滚动效果
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 添加作品集图片点击效果
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('你点击了作品集图片: ' + this.alt);
        });
    });

    // 轮播图功能
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.carousel-control.prev');
    const next = document.querySelector('.carousel-control.next');
    let index = 0;

    function showItem(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    prev.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为
        index = (index > 0) ? index - 1 : items.length - 1;
        showItem(index);
    });

    next.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认行为
        index = (index < items.length - 1) ? index + 1 : 0;
        showItem(index);
    });
});
