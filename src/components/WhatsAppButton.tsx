declare global {
  function gtag(...args: any[]): void;
}

export default function WhatsAppButton() {
  const handleClick = () => {
    gtag('event', 'conversion', { 'send_to': 'AW-17940909501/iUWUCOWBq_YbEL2b8upC' });
  };

  return (
    <a
      href="https://wa.me/5519996911984"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition"
    >
      <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
}