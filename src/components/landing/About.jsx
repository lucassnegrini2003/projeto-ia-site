import React from 'react';
import { CheckCircle2, Sun } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { ABOUT_IMAGE } from '@/lib/constants';

const PILLARS = [
	'Equipe de engenheiros especializada e certificada',
	'Projetos e estudos personalizados para cada perfil de consumo',
	'Recomendações técnicas de equipamentos de alta performance',
	'Entrega de documentação técnica completa e normatizada',
];

export default function About() {
	return (
		<section id="sobre" className="bg-white py-24 sm:py-28">
			<div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
				<Reveal>
					<div className="relative overflow-visible">
						<div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-gold/50 sm:-left-4 sm:-top-4" aria-hidden="true" />
						<img
							src={ABOUT_IMAGE}
							alt="Engenheiros da TL Engenharia inspecionando painéis solares em telhado comercial"
							className="relative w-full rounded-2xl object-cover shadow-2xl shadow-navy/20"
						/>
						<div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-xl bg-navy px-4 py-3 shadow-xl shadow-navy/30 sm:-bottom-6 sm:-right-6 sm:px-5 sm:py-4">
							<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold sm:h-11 sm:w-11">
								<Sun className="h-5 w-5 sm:h-6 sm:w-6" />
							</span>
							<div>
								<p className="font-display text-base font-bold text-white sm:text-lg">+8,5 MWp</p>
								<p className="text-[0.65rem] text-white/60 sm:text-xs">de potência instalada</p>
							</div>
						</div>
					</div>
				</Reveal>

				<div>
					<Reveal>
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
							Sobre a TL Engenharia
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
							Engenharia elétrica com precisão, energia solar com propósito
						</h2>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="mt-6 text-base leading-relaxed text-muted-foreground">
							A TL Engenharia é especializada em engenharia e consultoria: realizamos
							estudos, projetos, análises e recomendações técnicas. Unimos conhecimento técnico e
							compromisso com resultados para entregar projetos seguros, eficientes e com excelente retorno sobre o investimento.
						</p>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							Atendemos residências, comércios, indústrias e o agronegócio, sempre com
							projetos e estudos sob medida para cada necessidade energética, entregando
							todas as recomendações para uma implementação segura e eficiente.
						</p>
					</Reveal>
					<Reveal delay={0.2}>
						<ul className="mt-8 space-y-3.5">
							{PILLARS.map((item) => (
								<li key={item} className="flex items-start gap-3">
									<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
									<span className="text-sm font-medium text-navy sm:text-base">{item}</span>
								</li>
							))}
						</ul>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
