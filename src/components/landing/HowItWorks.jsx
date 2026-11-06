import React from 'react';
import { Calculator, ClipboardCheck, FileCheck2, Phone, Search } from 'lucide-react';
import Reveal from '@/components/Reveal';

const STEPS = [
	{
		icon: Phone,
		title: 'Contato',
		text: 'Você fala com a nossa equipe e descreve sua necessidade energética.',
	},
	{
		icon: Search,
		title: 'Análise técnica',
		text: 'Estudamos seu consumo de energia, as condições do local e a viabilidade do projeto.',
	},
	{
		icon: Calculator,
		title: 'Dimensionamento',
		text: 'Calculamos o sistema ideal e recomendamos os equipamentos adequados ao seu perfil.',
	},
	{
		icon: FileCheck2,
		title: 'Proposta de projeto',
		text: 'Apresentamos uma proposta técnica clara, com custos estimados e retorno do investimento.',
	},
	{
		icon: ClipboardCheck,
		title: 'Entrega da documentação',
		text: 'Entregamos o projeto completo e a documentação técnica para você implementar com segurança.',
	},
];

export default function HowItWorks() {
	return (
		<section className="bg-white py-24 sm:py-28">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mx-auto max-w-2xl text-center">
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
							Processo
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
							Como funciona
						</h2>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							Um processo de consultoria simples e transparente, em cinco etapas, do
							primeiro contato à entrega da documentação técnica para você implementar.
						</p>
					</div>
				</Reveal>

				<ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
					<div
						className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:left-0 md:top-7 md:h-px md:w-full md:bg-gradient-to-r"
						aria-hidden="true"
					/>
					{STEPS.map((step, index) => (
						<li key={step.title} className="relative pl-16 md:pl-0 md:pt-20">
							<Reveal delay={index * 0.08}>
								<span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-white text-primary shadow-md shadow-gold/20 md:left-1/2 md:top-2 md:h-14 md:w-14 md:-translate-x-1/2">
									<step.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.2} />
								</span>
								<div className="md:text-center">
									<span className="text-xs font-bold uppercase tracking-widest text-gold">
										Etapa {index + 1}
									</span>
									<h3 className="mt-1.5 font-display text-lg font-semibold text-navy">
										{step.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
										{step.text}
									</p>
								</div>
							</Reveal>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
