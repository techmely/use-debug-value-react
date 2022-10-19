import { useDebugValue, useEffect, useState } from "react";

export function useCount({ initialCount = 0, step = 1 } = {}) {
  const [count, setCount] = useState(initialCount);
  useDebugValue({initialCount, step, count})
  const increment = () => setCount((c) => c + step);

  useEffect(() => {
    const id = setInterval(() => increment(), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [count, increment];
}
