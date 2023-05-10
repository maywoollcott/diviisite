import './PrivacyPolicy.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';
import { FaStar } from 'react-icons/fa';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const PrivacyPolicy = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className='demoContainer'>
      <Document
        file={'./PrivacyPolicy.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default PrivacyPolicy;
