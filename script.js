document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    // وظيفة لتبديل حالة القائمة عند الضغط على الزر
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // وظيفة لإظهار القسم وإغلاق قائمة التنقل إذا كانت مفتوحة
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        // إغلاق قائمة التنقل إذا كانت مفتوحة
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    }

    // وظيفة لتبديل الوضع الداكن
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    // تعيين الوظائف لتكون متاحة عند تحميل الصفحة
    window.showSection = showSection;
    window.toggleDarkMode = toggleDarkMode;
});

 
