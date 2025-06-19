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
      <div className="blog-post-content">
        {/* Header Section */}
        <div className="post-header">
          <div className="breadcrumb">
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Dash Strategy Overview</span>
          </div>
          <h1 className="post-title">Dash Strategy Overview</h1>
          <div className="post-meta">
            <div className="meta-item">
              <span className="meta-label">Published</span>
              <span className="meta-value">December 2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">Strategy</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Read Time</span>
              <span className="meta-value">8 min read</span>
            </div>
          </div>
          <div className="back-link">
            <Link to="/blog" className="back-btn">
              <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

        {/* PDF Content */}
        <div className="pdf-container">
          <Document
            file="/assets/blog-dash.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className="pdf-doc"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                className="pdf-page"
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
