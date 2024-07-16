import { useState } from "react";
export default function useToggle() {
  const [isT, setIsT] = useState(true);
  return [isT, setIsT];
}
