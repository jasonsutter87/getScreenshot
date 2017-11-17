function GetScreenshot() {
  html2canvas(window.parent.document.getElementsByTagName('dd-map'), {
  logging: false,
  useCORS: true,
  dpi: 192,
  onrendered: function(canvas) {
      document.body.appendChild(canvas);
    }
  });
}
