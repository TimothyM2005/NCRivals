import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "./DashPost.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ZenohPost() {
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF loading error:', error);
    setPdfError(true);
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post-content">
        {/* Header Section */}
        <div className="post-header">
          <div className="breadcrumb">
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Zenoh Control System</span>
          </div>
          <h1 className="post-title">Zenoh Control System</h1>
          <div className="post-meta">
            <div className="meta-item">
              <span className="meta-label">Published</span>
              <span className="meta-value">January 2025</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">Technical</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Read Time</span>
              <span className="meta-value">12 min read</span>
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
          {pdfError ? (
            <div className="pdf-error">
              <div className="error-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3>Content Coming Soon</h3>
              <p>The Zenoh Control System blog post is currently being prepared. Please check back soon for our deep dive into this cutting-edge robotics control architecture!</p>
              <div className="error-details">
                <strong>What to expect:</strong>
                <ul>
                  <li>Custom control system architecture overview</li>
                  <li>Implementation details and code examples</li>
                  <li>Performance comparisons and benchmarks</li>
                  <li>Real-world robotics applications</li>
                </ul>
              </div>
            </div>
          ) : (
            <Document
              file="/assets/blog-zenoh.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
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
          )}
        </div>
      </div>
    </div>
  );
} 