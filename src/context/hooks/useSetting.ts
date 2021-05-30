import { useState } from 'react';

const useSetting = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleToggleIsVisible = () => setIsVisible(!isVisible);

  return {
    isVisible,
    handleToggleIsVisible,
  };
};

export default useSetting;
