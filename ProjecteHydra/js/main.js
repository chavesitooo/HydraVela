// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ============================================
// CREW SECTION
// ============================================
const crewMembers = [
    {
        name: "Fernando León",
        role: "Patrón",
        description: "Campeón olímpico en la clase Tornado en los Juegos Olímpicos de Atlanta 1996 junto a Pepote Ballester, Fernando León es una de las figuras más destacadas de la vela española. Con una trayectoria que abarca más de tres décadas, ha demostrado no solo su talento como regatista, sino también su capacidad para liderar equipos al más alto nivel. León acumula una experiencia impresionante en competiciones nacionales e internacionales, incluyendo su participación en 39 o 40 ediciones de la Copa del Rey, donde ha logrado alzarse con la victoria en cinco ocasiones. Su enfoque basado en el trabajo en equipo y su espíritu competitivo siguen siendo clave en el rendimiento del 'HM Hospitales-Hydra', en el que compite junto a una generación irrepetible."
    },
    {
        name: "Pepote Ballester",
        role: "Táctico",
        description: "José María “Pepote” Ballester, campeón olímpico junto a Fernando León en la clase Tornado en Atlanta 1996, es otro de los nombres imprescindibles en la historia de la vela española. Ballester aporta al equipo no solo su extraordinaria trayectoria deportiva, sino también la experiencia técnica acumulada durante años de competición al más alto nivel. Su habilidad para adaptarse a las nuevas exigencias del deporte y su pasión inquebrantable por la competición le han permitido mantenerse en la élite durante más de treinta años. Al igual que sus compañeros, sigue disfrutando del mar y del trabajo en equipo, valores fundamentales para el éxito del 'HM Hospitales-Hydra'."
    },
    {
        name: "Kiko Sánchez Luna",
        role: "Trimmer",
        description: "Campeón olímpico en la clase 470 en los Juegos Olímpicos de Barcelona 1992, Kiko Sánchez Luna forma parte de la generación dorada que dejó huella en la vela española. Su título olímpico, alcanzado en unos Juegos históricos, fue un hito que marcó su carrera deportiva y consolidó su lugar entre los mejores regatistas del país. Más de treinta años después, Sánchez Luna sigue compitiendo con la misma pasión y complicidad de siempre, destacando por su capacidad de análisis táctico y su espíritu de equipo. Para él, competir con amigos es la esencia del deporte y la clave de un rendimiento exitoso, como lo demuestra su papel fundamental en el 'HM Hospitales-Hydra'."
    }
];

// Función para actualizar la información del tripulante
function updateCrewInfo(index) {
    const crewMember = crewMembers[index];
    const crewInfo = document.querySelector('.crew-info');
    
    crewInfo.classList.remove('fade-in');
    void crewInfo.offsetWidth;
    
    document.getElementById('crewName').textContent = crewMember.name;
    document.getElementById('crewRole').textContent = crewMember.role;
    document.getElementById('crewDescription').textContent = crewMember.description;
    
    crewInfo.classList.add('fade-in');
}

// Inicializar con el primer tripulante cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    updateCrewInfo(0);
});

// Actualizar cuando cambia el slider
document.getElementById('tripulacionSlider').addEventListener('slide.bs.carousel', function (e) {
    updateCrewInfo(e.to);
});