document.addEventListener('DOMContentLoaded', () => {
    const thumbnailClick = document.getElementById("thumbnailClick");
    const textPosition = document.querySelectorAll('.textPosition');
    const textPositionLeft = document.querySelectorAll('.textPositionLeft');
    const thingBox = document.querySelectorAll('.thingBox');
    const deck = document.querySelector('.deck')

    thumbnailClick.addEventListener('click',() => {
        
        deck.classList.toggle('wider');

        setTimeout(() => {
            thingBox.forEach((item,index) => {
                setTimeout(() => {
                    item.classList.toggle('move');
                },index * 50);
            });
        });

        setTimeout(() => {
            textPosition.forEach((item, index) => {
            setTimeout(() => {
                    item.classList.toggle('open');
                }, index * 50); 
            });
        }, 500);

        setTimeout(() => {
            textPositionLeft.forEach((item, index) => {
            setTimeout(() => {
                    item.classList.toggle('open');
                }, index * 50); 
            });
        }, 500);    
    });
});