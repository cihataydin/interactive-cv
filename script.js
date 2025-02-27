document.addEventListener('DOMContentLoaded', function ()
{
    // Profil bilgileri
    const profileData = {
        name: "İsminiz",
        title: "Yazılım Geliştirici",
        profileImage: "profil-foto-url",
        social: {
            github: "https://github.com/cihataydin",
            linkedin: "https://www.linkedin.com/in/cihat-aydin/"
        }
    };

    // Profil bilgilerini güncelle
    const nameElement = document.querySelector('h1.text-4xl');
    if (nameElement) nameElement.textContent = profileData.name;

    const titleElement = document.querySelector('p.text-xl.md\\:text-2xl');
    if (titleElement) titleElement.textContent = profileData.title;

    const profileImage = document.querySelector('img[alt="Profil Fotoğrafı"]');
    if (profileImage) profileImage.src = profileData.profileImage;

    // Sosyal medya linklerini güncelle
    const githubLink = document.querySelector('a[href="#"]');
    if (githubLink) githubLink.href = profileData.social.github;

    const linkedinLink = document.querySelectorAll('a[href="#"]')[1];
    if (linkedinLink) linkedinLink.href = profileData.social.linkedin;

    // Yetenekler için veri
    const skills = [
        {
            icon: "fab fa-js",
            name: "JavaScript",
            description: "Web Geliştirme",
            color: "yellow"
        },
        {
            icon: "fab fa-python",
            name: "Python",
            description: "Backend & AI",
            color: "purple"
        },
        {
            icon: "fab fa-vuejs",
            name: "Vue.js",
            description: "Frontend Geliştirme",
            color: "cyan"
        },
        {
            icon: "fab fa-angular",
            name: "Angular",
            description: "Frontend Geliştirme",
            color: "red"
        },
        {
            icon: "fab fa-git-alt",
            name: "Git",
            description: "Versiyon Kontrolü",
            color: "emerald"
        }
    ];

    // Yetenekler slider'ını güncelle
    const skillsSlider = document.getElementById('skillsSlider');
    if (skillsSlider) {
        skillsSlider.innerHTML = skills.map(skill => `
            <div class="flex-none w-[280px]">
                <div class="group relative overflow-hidden rounded-2xl bg-[#1A2333] p-1 h-[200px] hover:shadow-lg hover:shadow-${skill.color}-500/20 transition-all duration-300">
                    <div class="absolute inset-0 bg-gradient-to-br from-${skill.color}-500 to-${skill.color === 'yellow' ? 'orange' : skill.color}-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div class="relative p-6 text-center flex flex-col items-center justify-center h-full">
                        <i class="${skill.icon} text-5xl text-${skill.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300"></i>
                        <h3 class="text-xl font-medium text-gray-200">${skill.name}</h3>
                        <p class="text-gray-400 mt-2 text-sm">${skill.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Deneyimler için veri
    const experiences = [
        {
            period: "2022 - Günümüz",
            title: "Kıdemli Yazılım Geliştirici",
            company: "Mevcut Şirket",
            description: "Backend ve web uygulamaları geliştirme, mikroservis mimarisi, veritabanı entegrasyonları ve performans optimizasyonu. Ekip liderliği ve mentorluk.",
            technologies: ["C#", ".NET", "TypeScript", "NestJS"],
            color: "blue"
        },
        {
            period: "2020 - 2022",
            title: "Yazılım Geliştirici",
            company: "Önceki Şirket",
            description: "Web uygulamaları geliştirme, CodeIgniter ile PHP projeleri, veritabanı yönetimi ve API entegrasyonları.",
            technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
            color: "purple"
        },
        {
            period: "2018 - 2020",
            title: "Jr. Web Geliştirici",
            company: "İlk Şirket",
            description: "Frontend geliştirme, responsive tasarımlar ve temel backend işlemleri.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            color: "pink"
        }
    ];

    // Timeline container'ı seç
    const timelineContainer = document.querySelector('.container .max-w-4xl');
    if (timelineContainer) {
        // Önce içeriği temizle
        timelineContainer.innerHTML = '';

        // Timeline ana çizgisini ekle
        const timelineLine = document.createElement('div');
        timelineLine.className = 'absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20';
        timelineContainer.appendChild(timelineLine);

        // Her deneyim için timeline öğesi oluştur
        experiences.forEach((exp, index) => {
            const experienceDiv = document.createElement('div');
            experienceDiv.className = `relative flex flex-col md:flex-row group ${index !== experiences.length - 1 ? 'mb-24' : ''}`;

            // Sol taraf
            const leftSide = `
                <div class="w-full md:w-1/2 md:pr-12 mb-4 md:mb-0">
                    <div class="md:text-right space-y-2">
                        <div class="inline-flex items-center space-x-2 md:space-x-reverse md:flex-row-reverse">
                            <span class="text-${exp.color}-400 font-semibold">${exp.period}</span>
                            <div class="h-px w-12 bg-gradient-to-r from-${exp.color}-500 to-transparent md:from-transparent md:to-${exp.color}-500"></div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-100">${exp.title}</h3>
                        <p class="text-${exp.color}-400/80">${exp.company}</p>
                    </div>
                </div>
            `;

            // Timeline noktası
            const timelinePoint = `
                <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-${exp.color}-500 ring-4 ring-${exp.color}-500/20 group-hover:ring-${exp.color}-500/40 transition-all duration-300"></div>
                </div>
            `;

            // Sağ taraf
            const rightSide = `
                <div class="w-full md:w-1/2 md:pl-12 pl-16 md:pl-12">
                    <p class="text-gray-400 leading-relaxed">${exp.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        ${exp.technologies.map(tech => 
                            `<span class="px-3 py-1 rounded-full text-sm bg-${exp.color}-500/10 text-${exp.color}-400">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            `;

            experienceDiv.innerHTML = leftSide + timelinePoint + rightSide;
            timelineContainer.appendChild(experienceDiv);
        });
    }

    // İletişim bilgileri
    const contactInfo = {
        email: "cihataydin.tr@gmail.com",
        phone: "+90 555 123 4567",
        location: "İstanbul, Türkiye"
    };

    // İletişim bilgilerini güncelle
    const emailElement = document.querySelector('.text-gray-300');
    if (emailElement) emailElement.textContent = contactInfo.email;

    const phoneElement = document.querySelectorAll('.text-gray-300')[1];
    if (phoneElement) phoneElement.textContent = contactInfo.phone;

    const locationElement = document.querySelectorAll('.text-gray-300')[2];
    if (locationElement) locationElement.textContent = contactInfo.location;

    // Footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = `© ${new Date().getFullYear()} ${profileData.name} | Tüm hakları saklıdır.`;
    }
});