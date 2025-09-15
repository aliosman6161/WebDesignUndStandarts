function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'pdf/Volleyball-Regeln.pdf';
    link.download = 'Volleyball-Regeln.pdf';
    link.click();
  }