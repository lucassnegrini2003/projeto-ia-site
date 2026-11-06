import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLinkWithMessage } from '@/lib/constants';

export default function WhatsAppFloat() {
	return (
		<a
			href={whatsappLinkWithMessage(DEFAULT_WHATSAPP_MESSAGE)}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Falar com a TL Engenharia pelo WhatsApp"
			className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 transition-transform hover:scale-105 active:scale-95"
		>
			<span
				className="absolute inset-0 rounded-full bg-[#25D366]/50 motion-safe:animate-ping"
				aria-hidden="true"
			/>
			<MessageCircle className="relative h-7 w-7" />
		</a>
	);
}
