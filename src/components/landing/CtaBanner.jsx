import React from 'react';
import { MessageCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLinkWithMessage } from '@/lib/constants';

export default function CtaBanner() {
	return (
		<section className="relative overflow-hidden bg-navy py-20 sm:py-24">
			<div
				className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl"
				aria-hidden="true"
			/>
			<div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
				<Reveal>
					<h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
						Pronto para transformar a forma como você{' '}
						<span className="text-gold">utiliza energia?</span>
					</h2>
				</Reveal>
				<Reveal delay={0.1}>
					<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
						Solicite uma análise técnica e descubra quanto você pode economizar
						com um projeto bem dimensionado pela TL Engenharia.
					</p>
				</Reveal>
				<Reveal delay={0.2}>
					<a
						href={whatsappLinkWithMessage(DEFAULT_WHATSAPP_MESSAGE)}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-9 inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40 active:scale-[0.98]"
					>
						<MessageCircle className="h-5 w-5" />
						Solicitar orçamento pelo WhatsApp
					</a>
				</Reveal>
			</div>
		</section>
	);
}
