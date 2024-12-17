document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Masonry después de que las imágenes estén cargadas
    var grid = document.querySelector('.gallery-grid');
    
    imagesLoaded(grid, function() {
        var masonry = new Masonry(grid, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-sizer',
            percentPosition: true
        });

        // Filtrado de la galería
        const filterButtons = document.querySelectorAll('.gallery-filter button');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Añadir clase active al botón clickeado
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Redibujar Masonry después de filtrar
                setTimeout(function() {
                    masonry.layout();
                }, 100);
            });
        });
    });

    // Inicializar Lightbox después de que el DOM esté completamente cargado
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        });
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
});