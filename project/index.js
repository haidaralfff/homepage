const text = "Saya Adalah Seorang Mahasiswa Semester 2 Yang Ingin Menjadi Fullstack Developer";
  const typingSpeed = 90; 
  let index = 0;

  function typeText() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeText, typingSpeed);
    }
  }
  typeText();

  function showSection(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      if (sec.id === section) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  }



  