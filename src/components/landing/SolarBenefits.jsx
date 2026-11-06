import React from 'react';
import {
	ArrowRight,
	Gauge,
	Landmark,
	Leaf,
	PiggyBank,
	ShieldCheck,
	TrendingUp,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const BENEFITS = [
	{
		icon: PiggyBank,
		title: 'Economia com projetos bem dimensionados',
		text: 'Um projeto técnico bem dimensionado reduz a conta de energia desde o primeiro mês e protege contra reajustes tarifários.',
	},
	{
		icon: Gauge,
		title: 'Eficiência técnica',
		text: 'Sistemas calculados com precisão para máxima geração e desempenho ideal em cada perfil de consumo.',
	},
	{
		icon: ShieldCheck,
		title: 'Segurança das instalações',
		text: 'Projetos em conformidade com as normas técnicas garantem instalações seguras, protegidas e confiáveis.',
	},
	{
		icon: Leaf,
		title: 'Sustentabilidade',
		text: 'Gere energia limpa a partir do sol, sem emissão de poluentes, e fortaleça a imagem sustentável do seu negócio.',
	},
	{
		icon: TrendingUp,
		title: 'Retorno previsível',
		text: 'Análises de viabilidade claras mostram o payback estimado e o retorno ao longo da vida útil do sistema.',
	},
	{
		icon: Landmark,
		title: 'Investimento de longo prazo',
		text: 'Projetos com vida útil superior a 25 anos e payback médio entre 3 e 5 anos, conforme o dimensionamento.',
	},
];

export default function SolarBenefits() {
	return (
		<section id="energia-solar" className="bg-secondary/60 py-24 sm:py-28">
			<div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:px-8">
				<Reveal>
					<div className="flex h-full flex-col justify-between rounded-3xl bg-navy p-8 shadow-xl shadow-navy/25 sm:p-10">
						<div>
							<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
								<span className="h-px w-8 bg-gold" aria-hidden="true" />
								Energia Solar
							</span>
							<h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
								Por que investir em energia solar?
							</h2>
							<p className="mt-5 text-base leading-relaxed text-white/70">
								A energia solar fotovoltaica é uma das formas mais inteligentes de
								transformar um custo fixo em um investimento rentável, limpo e
								previsível.
							</p>
						</div>
						<div className="mt-10">
							<p className="font-display text-6xl font-extrabold text-gold sm:text-7xl">95%</p>
							<p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
								de redução média na conta de energia dos clientes com projetos dimensionados pela TL Engenharia
							</p>
							<a
								href="#contato"
								className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-md shadow-gold/25 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
							>
								Quero economizar
								<ArrowRight className="h-4 w-4" />
							</a>
						</div>
					</div>
				</Reveal>

				<div className="grid content-center gap-x-10 sm:grid-cols-2">
					{BENEFITS.map((benefit, index) => (
						<Reveal key={benefit.title} delay={index * 0.06}>
							<div className="border-b border-border py-6 first:pt-0 sm:first:pt-6 sm:[&:nth-child(-n+2)]:pt-0">
								<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-primary">
									<benefit.icon className="h-5 w-5 text-gold" strokeWidth={2.2} />
								</span>
								<h3 className="mt-4 font-display text-lg font-semibold text-navy">
									{benefit.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{benefit.text}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
