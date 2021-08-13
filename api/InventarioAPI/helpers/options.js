module.exports = {
  formate: "Letter",
  orientation: "landscape",
  border: "2mm",
  header: {
    height: "10.5in",
    contents:
      '<h4 style="color:black;font-size:20;font-weight:800;text-align:center;">Etiqueta Bien</h4>',
  },
  footer: {
    height: "20mm",
    contents: {
      first: "Cover Page",
      2: "Second Page",
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
      last: "Last Page",
    },
  },
};
 