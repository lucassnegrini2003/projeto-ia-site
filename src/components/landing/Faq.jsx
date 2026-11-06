import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Reveal from '@/components/Reveal';

const FAQ_ITEMS = [
	{
		question: 'O que está incluso na consultoria da TL Engenharia?',
		answer:
			'A consultoria inclui o estudo de viabilidade, o projeto técnico, o dimensionamento do sistema, as recomendações de equipamentos e toda a documentação necessária para que você implemente sua solução com segurança e clareza.',
	},
	{
		question: 'Quanto posso economizar com energia solar?',
		answer:
			'A economia varia conforme o perfil de consumo, mas clientes com projetos bem dimensionados reduzem em média até 95% do valor da conta de energia. Durante a análise técnica, calculamos a economia estimada para o seu caso específico.',
	},
	{
		question: 'Quanto tempo leva para a entrega do projeto?',
		answer:
			'O prazo varia conforme o porte e a complexidade do projeto. Projetos residenciais costumam ser entregues em poucos dias; projetos comerciais e industriais demandam mais tempo para estudos e dimensionamento. Definimos o cronograma na proposta de projeto.',
	},
	{
		question: 'O sistema funciona em dias nublados ou chuvosos?',
		answer:
			'Sim. Os painéis continuam gerando energia mesmo com menor intensidade, pois captam a radiação solar difusa. O dimensionamento do sistema já considera a variação climática da sua região.',
	},
	{
		question: 'Qual é a vida útil dos painéis solares?',
		answer:
			'Os painéis fotovoltaicos têm vida útil superior a 25 anos, com garantia de desempenho dos fabricantes. É um investimento de longo prazo, com payback médio entre 3 e 5 anos conforme o dimensionamento.',
	},
	{
		question: 'A TL Engenharia cuida da documentação técnica do projeto?',
		answer:
			'Sim. Elaboramos o projeto técnico, a ART e toda a documentação necessária para que você implemente o sistema e faça a homologação junto à concessionária de energia com segurança e conformidade.',
	},
];

export default function Faq() {
	return (
		<section id="faq" className="bg-secondary/60 py-24 sm:py-28">
			<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
				<Reveal>
					<div>
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
							Dúvidas frequentes
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
							Perguntas frequentes
						</h2>
						<p className="mt-5 text-base leading-relaxed text-muted-foreground">
							Reunimos as dúvidas mais comuns sobre energia solar e nossos
							serviços. Não encontrou a sua resposta? Fale com a nossa equipe.
						</p>
						<a
							href="#contato"
							className="mt-7 inline-flex min-h-[44px] items-center rounded-lg border border-primary/25 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:border-gold hover:text-navy active:scale-[0.98]"
						>
							Entrar em contato
						</a>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<Accordion type="single" collapsible className="space-y-3">
						{FAQ_ITEMS.map((item, index) => (
							<AccordionItem
								key={item.question}
								value={`item-${index}`}
								className="rounded-xl border border-border bg-white px-6 shadow-sm transition-colors data-[state=open]:border-gold/60"
							>
								<AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-navy hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Reveal>
			</div>
		</section>
	);
}
