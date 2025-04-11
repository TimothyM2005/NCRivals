import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "./DashPost.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function DashPost() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <div className="blog-post-container">
      <h1 className="post-title">Dash Strategy Overview</h1>
      <div className="back-link">
        <Link to="/blog" className="read-more-btn">← Back to Blog</Link>
      </div>
      <Document
        file="/assets/blog-dash.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-doc"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false} // ✅ disables the invisible text overlay
          />
        ))}
      </Document>
    </div>
  );
}
