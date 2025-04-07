function changerCouleur(valeur) {
    document.documentElement.style.setProperty('--bg-color', valeur);
  }

  function telechargerPDF() {
    var element = document.getElementById('main-cv');
var opt = {
  margin:       1,
  filename:     'myfile.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();
  }