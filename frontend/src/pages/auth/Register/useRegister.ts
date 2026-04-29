import { useState } from "react";

const useRegister = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  return { agreedToTerms, setAgreedToTerms };
};

export default useRegister;
