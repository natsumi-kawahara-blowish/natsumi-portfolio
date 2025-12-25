import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t border-soft/30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted text-xs font-medium">
          &copy; {new Date().getFullYear()} Natsumi Omura. All rights reserved.
        </p>
        <p className="text-muted/60 text-xs mt-2 md:mt-0 font-heading">
          Thank you for visiting.
        </p>
      </div>
    </footer>
  );
};

export default Footer;