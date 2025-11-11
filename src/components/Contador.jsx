
import React, { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-3">
      <h2>Contador</h2>
      <p>Valor actual: {count}</p>
      <div>
        <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>Incrementar</button>
        <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  );
}
