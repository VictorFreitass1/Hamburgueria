document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselContainer = document.querySelector(".carousel-container");

    let currentIndex = 0;
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;
    const intervalTime = 3000; // 3 segundos

    function hideAllItems() {
        carouselItems.forEach(item => {
            item.style.display = "none";
        });
    }

    function showItem(index) {
        hideAllItems();
        carouselItems[index].style.display = "block";
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function moveToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    nextBtn.addEventListener("click", moveToNextSlide);
    prevBtn.addEventListener("click", moveToPrevSlide);

    showItem(currentIndex);

    setInterval(moveToNextSlide, intervalTime);
});
