// CopyrightNotice.js

import React from 'react';

const CopyRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-notice">
      &copy; {2024} Narendra Sivangula. All Rights Reserved.
    </div>
  );
};

export default CopyRights;
