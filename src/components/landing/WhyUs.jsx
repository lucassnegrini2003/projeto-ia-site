import React from 'react';
import {
	ArrowRight,
	BadgeCheck,
	Eye,
	ShieldCheck,
	SlidersHorizontal,
	Users,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const REASONS = [
	{
		icon: Users,
		title: 'Atendimento personalizado',
		text: 'Cada cliente é único. Ouvimos suas necessidades e desenhamos o projeto ideal para o seu perfil de consumo.',
	},
	{
		icon: BadgeCheck,
		title: 'Qualidade técnica',
		text: 'Equipe de engenheiros qualificados, projetos em conformidade com as normas e recomendações de equipamentos adequados.',
	},
	{
		icon: ShieldCheck,
		title: 'Segurança das instalações',
		text: 'Projetos com rigor técnico, proteções adequadas e total conformidade com as normas regulamentadoras para instalações seguras.',
	},
	{
		icon: Eye,
		title: 'Transparência',
		text: 'Propostas claras, prazos definidos e comunicação aberta em todas as etapas da consultoria.',
	},
	{
		icon: SlidersHorizontal,
		title: 'Projetos bem dimensionados',
		text: 'Nada de projetos genéricos: cada sistema é dimensionado para entregar o máximo de economia e eficiência no seu caso.',
	},
];

export default function WhyUs() {
	return (
		<section id="beneficios" className="bg-navy py-24 sm:py-28">
			<div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-8">
				<Reveal>
					<div className="lg:sticky lg:top-32">
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
							Nossos diferenciais
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
							Por que escolher a TL Engenharia?
						</h2>
						<p className="mt-5 text-base leading-relaxed text-white/70">
							Mais do que recomendações, entregamos clareza técnica: um projeto
							bem dimensionado, seguro e acompanhado de perto do primeiro contato à
							entrega da documentação técnica.
						</p>
						<a
							href="#contato"
							className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-md shadow-gold/25 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
						>
							Falar com um especialista
							<ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</Reveal>

				<div>
					{REASONS.map((reason, index) => (
						<Reveal key={reason.title} delay={index * 0.07}>
							<div className="flex gap-5 border-b border-white/10 py-7 first:pt-0 last:border-b-0 sm:gap-7">
								<span className="font-display text-3xl font-extrabold text-gold/90 sm:text-4xl">
									{String(index + 1).padStart(2, '0')}
								</span>
								<div>
									<div className="flex items-center gap-3">
										<reason.icon className="h-5 w-5 text-gold" strokeWidth={2.2} />
										<h3 className="font-display text-lg font-semibold text-white">
											{reason.title}
										</h3>
									</div>
									<p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-base">
										{reason.text}
									</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
