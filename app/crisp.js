"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b24bd81c-bed3-4ae4-a4cc-d00ae95d4b8f");
  });

  return null;
}

export default CrispChat;