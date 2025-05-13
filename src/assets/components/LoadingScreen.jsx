import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 custom-radial-bg flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;