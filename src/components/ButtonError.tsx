import { useState } from 'react';

function ButtonError() {
  const [synthError, setSynthError] = useState<Error | null>(null);

  const handleClick = () => {
    setSynthError(new Error());
  };

  if (synthError) throw synthError;
  return (
    <button className="button_error" onClick={handleClick}>
      Throw error
    </button>
  );
}

export default ButtonError;
