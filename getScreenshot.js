function GetScreenshot() {
  html2canvas(window.parent.document.getElementsByTagName('dd-map'), {
  logging: false,
  useCORS: true,
  dpi: 192,
  display:'none',
  onrendered: function(canvas) {
    document.body.appendChild(canvas);
    //Get canvas that was created
    let pdfCanvas = document.getElementsByTagName('canvas')
    //Convert image to dataURL
    var dataURL = pdfCanvas[0].toDataURL("image/png");
    // canvas.display= 'none';
    let getScreenshot =  document.getElementById('getScreenshot')
    //Add dataUrl to href on anchor tag

    //Add download property on anchor tag
    getScreenshot.download = 'Screen_Shot.png'
    //remove on Click property anchor tag
    getScreenshot.removeAttribute("onclick")

    //Convert image to PDF
    var pdf = new jsPDF(
      {
        orientation: 'landscape'
      });

    pdf.addImage(dataURL, 'PNG', 10, 10);
    pdf.save('screen_shot.pdf');

    $('#getScreenshot').click();
    }
  });
}
