import React from 'react';
import { ArrowRight, Sun } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { HERO_IMAGE } from '@/lib/constants';

const STATS = [
	{ value: 120, suffix: '+', label: 'Projetos entregues' },
	{ value: 8.5, suffix: ' MWp', decimals: 1, label: 'Potência projetada' },
	{ value: 98, suffix: '%', label: 'Clientes satisfeitos' },
];

export default function Hero() {
	return (
		<section id="inicio" className="relative flex min-h-[100dvh] items-center overflow-hidden">
			<img
				src={HERO_IMAGE}
				alt="Engenheiro inspecionando usina de painéis solares fotovoltaicos ao pôr do sol"
				className="absolute inset-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
			<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40" />

			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
				<div className="max-w-3xl">
					<Reveal>
						<span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
							<Sun className="h-3.5 w-3.5" />
							Engenharia & Consultoria Técnica
						</span>
					</Reveal>

					<Reveal delay={0.1}>
						<h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
							Projetos e consultoria para um{' '}
							<span className="text-gold">futuro mais eficiente</span>
						</h1>
					</Reveal>

					<Reveal delay={0.2}>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
							A TL Engenharia é especializada em engenharia e consultoria: desenvolvemos
							projetos técnicos, análises de viabilidade, dimensionamento de sistemas,
							recomendações de equipamentos e estudos de eficiência energética para
							que você implemente sua solução com segurança e total clareza técnica.
						</p>
					</Reveal>

					<Reveal delay={0.3}>
						<div className="mt-9 flex flex-col gap-4 sm:flex-row">
							<a
								href="#contato"
								className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/40 active:scale-[0.98]"
							>
								Solicitar consultoria
								<ArrowRight className="h-5 w-5" />
							</a>
							<a
								href="#servicos"
								className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-white/10 hover:text-gold active:scale-[0.98]"
							>
								Conhecer serviços
							</a>
						</div>
					</Reveal>

					<Reveal delay={0.45}>
						<div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/15 pt-7 sm:gap-6 sm:pt-8">
							{STATS.map((stat) => (
								<div key={stat.label} className="min-w-0">
									<CountUp
										value={stat.value}
										suffix={stat.suffix}
										decimals={stat.decimals || 0}
										locale="pt-BR"
										className="font-display text-xl font-bold leading-tight text-gold sm:text-2xl lg:text-3xl"
									/>
									<p className="mt-1 text-[0.65rem] font-medium uppercase leading-tight tracking-wide text-white/60 sm:text-sm">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
