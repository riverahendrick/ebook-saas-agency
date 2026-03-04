const MarkdownIt = require('markdown-it');
const pdf = require('html-pdf-node');
const fs = require('fs');

const md = new MarkdownIt();
const markdownContent = fs.readFileSync('/home/openclaw/workspace/projects/ebook-saas/src/ebook_content.md', 'utf8');
const htmlContent = md.render(markdownContent);

const options = { format: 'A4', margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' } };
const file = { content: `
    <html>
    <head>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
            h1 { color: #111; border-bottom: 2px solid #06b6d4; padding-bottom: 10px; }
            h2 { color: #222; margin-top: 30px; }
            pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; font-family: monospace; font-size: 12px; }
            code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; font-family: monospace; }
            blockquote { border-left: 4px solid #10b981; margin-left: 0; padding-left: 15px; color: #555; font-style: italic; }
        </style>
    </head>
    <body>${htmlContent}</body>
    </html>
` };

pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFileSync('/home/openclaw/workspace/projects/ebook-saas/public/The_Zero_Cost_Agency.pdf', pdfBuffer);
    console.log('PDF Generated successfully!');
});