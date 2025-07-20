import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber="+5534996688205"
      accountName="Viva Aventuras: como posso ajudá-lo?"
      chatMessage="Olá! Envie sua dúvida ou mensagem abaixo:"
      statusMessage="Disponível"
      placeholder="Digite a sua mensagem"
      allowClickAway={true}
      allowEsc={true}
      avatar="/navLogoNew.png"
    />
  );
}