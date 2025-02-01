document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('name').textContent = 'Cihat Aydin';

    document.getElementById('title').textContent = 'Cihat Aydin';

    document.getElementById('profession').textContent = 'Software Developer | Turkey';

    document.getElementById('aboutText').textContent = `Hello! I'm Cihat, a dedicated web and backend developer with a strong foundation in mathematics. 
                                                        I have a decade of experience in developing sophisticated web applications, focusing on efficient 
                                                        and scalable solutions. Starting with a deep passion for mathematics, I've applied my analytical skills 
                                                        to develop algorithms that enhance application performance. As a backend developer, I specialize 
                                                        in integrating multiple databases and services, proficient in languages like C#, TypeScript, PHP, 
                                                        and Python, and frameworks such as .NET, NestJS, CodeIgniter and Node.js.
                                                        On the frontend side, I create intuitive and user-friendly interfaces, leveraging my knowledge in 
                                                        HTML, CSS, and utilizing tools like Bootstrap and jQuery. I am also closely interested in artificial 
                                                        intelligence and plan to delve deeper into this area to contribute to technological advancements.
                                                        I am eager to take on new challenges and continue evolving in the tech industry. 
                                                        Thank you for visiting my profile. I look forward to collaborating on projects that leverage my diverse 
                                                        skills and contribute to technological advancements.`;

    document.getElementById('experienceText').textContent = `Cihat has worked with several startups and established companies, creating 
                                                            web applications and websites that are user-friendly and visually appealing. 
                                                            He is a graduate of the Mathematics Department.`;

    const linkedin = document.getElementById('linkedin');
    linkedin.href = 'https://www.linkedin.com/in/cihat-aydin/';

    const github = document.getElementById('github');
    github.href = 'https://github.com/cihataydin';
    
    const footer = document.getElementById('footer');
    footer.innerHTML = `© 2025 Cihat Aydin | <a id="emailMe" href="mailto:cihataydin.tr@gmail.com">Email Me</a>`;
});