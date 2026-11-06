import React from 'react';
import {
	Building2,
	Calculator,
	FileText,
	Gauge,
	MessagesSquare,
	Sun,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const SERVICES = [
	{
		icon: Sun,
		title: 'Projetos de Energia Solar',
		text: 'Projetos técnicos de geração solar para residências, empresas, indústrias e agronegócio — do estudo de viabilidade à entrega da documentação para implementação.',
	},
	{
		icon: FileText,
		title: 'Projetos Elétricos',
		text: 'Elaboração de projetos elétricos residenciais, comerciais e industriais, em conformidade com as normas técnicas e foco total em segurança.',
	},
	{
		icon: Calculator,
		title: 'Dimensionamento de Sistemas',
		text: 'Cálculo preciso da potência ideal do sistema com base no seu histórico de consumo, irradiação solar e características da instalação.',
	},
	{
		icon: MessagesSquare,
		title: 'Consultoria Técnica Especializada',
		text: 'Análise técnica especializada para orientar decisões sobre geração de energia, adequação de instalações e redução de custos.',
	},
	{
		icon: Gauge,
		title: 'Estudos de Eficiência Energética',
		text: 'Diagnóstico do consumo de energia e recomendações de melhorias que reduzem desperdícios e aumentam a performance das instalações.',
	},
	{
		icon: Building2,
		title: 'Consultoria para Empresas',
		text: 'Projetos e estudos corporativos de médio e grande porte, com relatórios técnicos, recomendações de equipamentos e suporte consultivo contínuo.',
	},
];

export default function Services() {
	return (
		<section id="servicos" className="bg-white py-24 sm:py-28">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mx-auto max-w-2xl text-center">
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
							Nossos serviços
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
							Serviços de Engenharia e Consultoria
						</h2>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							Realizamos estudos, projetos, análises e recomendações técnicas para atender
							cada etapa da sua necessidade energética, com entregáveis claros que orientam
							a implementação da sua solução.
						</p>
					</div>
				</Reveal>

				<div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{SERVICES.map((service, index) => (
						<Reveal key={service.title} delay={index * 0.06}>
							<article className="group h-full rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-navy/10">
								<span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold shadow-md shadow-navy/20 transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
									<service.icon className="h-6 w-6" strokeWidth={2} />
								</span>
								<h3 className="mt-6 font-display text-lg font-semibold text-navy">
									{service.title}
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
									{service.text}
								</p>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
