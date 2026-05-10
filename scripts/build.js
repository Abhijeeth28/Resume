const fs = require("fs");
const yaml = require("yaml");
const PDFDocument = require("pdfkit");

const content = fs.readFileSync("resume.yaml", "utf8");
const data = yaml.parse(content);

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("resume.pdf"));

doc.fontSize(24).text(data.name);

doc.moveDown();

doc.fontSize(16).text(data.title);

doc.moveDown();

doc.fontSize(12).text(data.summary);

doc.moveDown();

doc.text("Skills:");
data.skills.forEach(skill => {
  doc.text(`- ${skill}`);
});

doc.end();
