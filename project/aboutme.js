const aboutTexts = [
      "Halo! Aku Haidar, manusia biasa yang suka ngulik kode, ngopi, dan rebahan (tapi tetep produktif dong 😎). Coding itu buatku bukan cuma kerjaan, tapi juga tempat curhat dan eksplorasi ide-ide random yang kadang jadi project keren.",
      "Selain ngoding, aku juga suka mantengin tren UI/UX, bikin portofolio kece, dan sharing hal-hal receh (tapi bermanfaat) di sosmed. Prinsipku: hidup santai boleh, tapi upgrade skill itu wajib! Yuk, connect dan bikin sesuatu yang seru bareng!"
    ];

    
    function typeParagraph(text, elementId, callback) {
      let i = 0;
      function type() {
        if (i <= text.length) {
          document.getElementById(elementId).textContent = text.slice(0, i);
          i++;
          setTimeout(type, 10); 
          setTimeout(callback, 400); 
        }
      }
      type();
    }

    typeParagraph(aboutTexts[1], "typing-about-1", function() {
      typeParagraph(aboutTexts[2], "typing-about-2");
    });