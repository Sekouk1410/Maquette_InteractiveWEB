function changerCouleur(valeur) {
    document.documentElement.style.setProperty('--bg-color', valeur);
  }

  function telechargerPDF() {
    var element = document.getElementById('main-cv');
    var opt = {
      margin:       0,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { 
        scale: 2,
        /*scrollX: 250,*/
        scrollY: 0,
        /*windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,*/
        useCORS: true, //pour la securité concernant les liens externes
      },
      jsPDF: { 
        unit: 'px', 
        format: [595,842], 
        orientation: 'portrait' 
      }
    };

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
  }