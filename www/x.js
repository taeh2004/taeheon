// 각 섹션의 높이를 윈도우 높이로 설정
function setSectionHeights() {
    var sections = document.querySelectorAll('.full-height');
    sections.forEach(function(section) {
        section.style.height = window.innerHeight + 'px';
    });
}

// 창 크기가 변경될 때마다 섹션 높이를 조정
window.addEventListener('resize', setSectionHeights);

// 초기 로딩 시에도 섹션 높이 조정
window.addEventListener('load', setSectionHeights);

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

