import { forwardRef } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = forwardRef<HTMLAnchorElement>((_, ref) => (
  <a
    ref={ref}
    href="https://wa.me/27798185184?text=Hi%20Zuko%20Piercer!%20I'd%20like%20to%20enquire%20about%20your%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-white" />
  </a>
));

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
