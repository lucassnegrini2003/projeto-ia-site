import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, Zap } from 'lucide-react';
import {
	ADDRESS,
	EMAIL,
	INSTAGRAM_URL,
	LINKEDIN_URL,
	SERVICE_AREA,
	WHATSAPP_DISPLAY,
	NAV_LINKS,
	WHATSAPP_LINK,
} from '@/lib/constants';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-navy text-white">
			<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
				<div>
					<a href="#inicio" className="flex items-center gap-2.5">
						<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy">
							<Zap className="h-5 w-5" strokeWidth={2.5} />
						</span>
						<span className="font-display text-lg font-bold tracking-tight">
							TL <span className="text-gold">Engenharia</span>
						</span>
					</a>
					<p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
						Soluções em Engenharia Elétrica e Energia Solar Fotovoltaica com foco
						em economia, eficiência, segurança e sustentabilidade.
					</p>
					<div className="mt-6 flex items-center gap-3">
						<a
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram da TL Engenharia"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
						>
							<Instagram className="h-4 w-4" />
						</a>
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn da TL Engenharia"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
						>
							<Linkedin className="h-4 w-4" />
						</a>
					</div>
				</div>

				<div>
					<h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
						Navegação
					</h3>
					<ul className="mt-5 space-y-3">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-sm text-white/65 transition-colors hover:text-gold"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
						Serviços
					</h3>
					<ul className="mt-5 space-y-3 text-sm text-white/65">
						<li>Energia Solar Fotovoltaica</li>
						<li>Projetos Elétricos</li>
						<li>Dimensionamento de Sistemas</li>
						<li>Consultoria e Eficiência Energética</li>
						<li>Soluções para Empresas</li>
					</ul>
				</div>

				<div>
					<h3 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
						Contato
					</h3>
					<ul className="mt-5 space-y-4 text-sm">
						<li>
							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-start gap-3 text-white/65 transition-colors hover:text-gold"
							>
								<Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
								{WHATSAPP_DISPLAY}
							</a>
						</li>
						<li>
							<a
								href={`mailto:${EMAIL}`}
								className="flex items-start gap-3 text-white/65 transition-colors hover:text-gold"
							>
								<Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
								{EMAIL}
							</a>
						</li>
						<li className="flex items-start gap-3 text-white/65">
							<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
							<span>
								{ADDRESS}
								<span className="block text-white/45">{SERVICE_AREA}</span>
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-white/10 bg-black/20">
				<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-white/50 sm:flex-row sm:px-6 sm:text-left lg:px-8">
					<p>© {year} TL Engenharia. Todos os direitos reservados.</p>
					<p>Engenharia Elétrica & Energia Solar Fotovoltaica</p>
				</div>
			</div>
		</footer>
	);
}
