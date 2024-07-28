import { useState } from 'react';
import { getTestAttrs } from '../../../tests/getTestAttrs';

function ButtonError() {
  const [synthError, setSynthError] = useState<Error | null>(null);

  const handleClick = () => {
    setSynthError(new Error());
  };

  if (synthError) throw synthError;
  return (
    <button
      {...getTestAttrs({ id: 'error-button' })}
      className="button_error"
      onClick={handleClick}
    >
      Throw error
    </button>
  );
}

export default ButtonError;
