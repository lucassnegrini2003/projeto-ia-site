import React, { useState } from 'react';
import { Clock, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import Reveal from '@/components/Reveal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	ADDRESS,
	EMAIL,
	INSTAGRAM_URL,
	LINKEDIN_URL,
	SERVICE_AREA,
	WHATSAPP_DISPLAY,
	WHATSAPP_LINK,
	whatsappLinkWithMessage,
} from '@/lib/constants';

const CONTACT_ROWS = [
	{ icon: Phone, label: 'WhatsApp', value: WHATSAPP_DISPLAY, href: WHATSAPP_LINK },
	{ icon: Mail, label: 'E-mail', value: EMAIL, href: `mailto:${EMAIL}` },
	{ icon: MapPin, label: 'Endereço', value: ADDRESS },
	{ icon: MapPin, label: 'Área de atuação', value: SERVICE_AREA },
	{ icon: Clock, label: 'Horário', value: 'Seg. a sex., das 8h às 18h' },
];

const PROJECT_TYPES = {
	residencial: 'Residencial',
	comercial: 'Comercial',
	industrial: 'Industrial',
	agronegocio: 'Agronegócio',
	outro: 'Outro',
};

export default function Contact() {
	const [form, setForm] = useState({
		nome: '',
		email: '',
		telefone: '',
		tipo: '',
		mensagem: '',
	});

	const update = (field) => (event) =>
		setForm((prev) => ({ ...prev, [field]: event.target.value }));

	const handleSubmit = (event) => {
		event.preventDefault();
		const message = [
			`Olá! Meu nome é ${form.nome}.`,
			`Tenho interesse em uma consultoria/projeto ${PROJECT_TYPES[form.tipo].toLowerCase()} de energia solar.`,
			form.mensagem ? `Mensagem: ${form.mensagem}` : '',
			`Contato: ${form.email} | ${form.telefone}`,
		]
			.filter(Boolean)
			.join('\n');
		window.open(whatsappLinkWithMessage(message), '_blank', 'noopener,noreferrer');
		toast.success('Mensagem pronta! Você será redirecionado ao WhatsApp.');
	};

	return (
		<section id="contato" className="bg-white py-24 sm:py-28">
			<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-14 lg:px-8">
				<Reveal className="lg:col-span-2">
					<div className="flex h-full flex-col rounded-3xl bg-navy p-8 shadow-xl shadow-navy/25 sm:p-10">
						<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
							<span className="h-px w-8 bg-gold" aria-hidden="true" />
							Contato
						</span>
						<h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white">
							Fale com a TL Engenharia
						</h2>
						<p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
							Preencha o formulário ou fale diretamente pelos nossos canais.
							Responderemos o quanto antes.
						</p>

						<ul className="mt-8 space-y-5">
							{CONTACT_ROWS.map((row) => (
								<li key={row.label} className="flex items-start gap-4">
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
										<row.icon className="h-5 w-5" />
									</span>
									<div>
										<p className="text-xs font-semibold uppercase tracking-wide text-white/50">
											{row.label}
										</p>
										{row.href ? (
											<a
												href={row.href}
												target={row.href.startsWith('http') ? '_blank' : undefined}
												rel="noopener noreferrer"
												className="text-sm font-medium text-white transition-colors hover:text-gold"
											>
												{row.value}
											</a>
										) : (
											<p className="text-sm font-medium text-white">{row.value}</p>
										)}
									</div>
								</li>
							))}
						</ul>

						<div className="mt-auto flex items-center gap-3 pt-10">
							<a
								href={INSTAGRAM_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram da TL Engenharia"
								className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href={LINKEDIN_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn da TL Engenharia"
								className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
							>
								<Linkedin className="h-5 w-5" />
							</a>
						</div>
					</div>
				</Reveal>

				<Reveal delay={0.1} className="lg:col-span-3">
					<form
						onSubmit={handleSubmit}
						className="rounded-3xl border border-border bg-card p-8 shadow-lg shadow-navy/5 sm:p-10"
					>
						<h3 className="font-display text-xl font-bold text-navy">
							Solicite sua consultoria
						</h3>
						<p className="mt-2 text-sm text-muted-foreground">
							Preencha os dados abaixo e envie diretamente para o nosso WhatsApp.
						</p>

						<div className="mt-8 grid gap-6 sm:grid-cols-2">
							<div className="grid gap-2">
								<Label htmlFor="nome" className="text-navy">Nome completo</Label>
								<Input
									id="nome"
									required
									value={form.nome}
									onChange={update('nome')}
									placeholder="Seu nome"
									className="h-12"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email" className="text-navy">E-mail</Label>
								<Input
									id="email"
									type="email"
									required
									value={form.email}
									onChange={update('email')}
									placeholder="voce@email.com"
									className="h-12"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="telefone" className="text-navy">Telefone / WhatsApp</Label>
								<Input
									id="telefone"
									type="tel"
									required
									value={form.telefone}
									onChange={update('telefone')}
									placeholder="(51) 98336-2003"
									className="h-12"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="tipo" className="text-navy">Tipo de projeto</Label>
								<Select
									required
									value={form.tipo}
									onValueChange={(value) => setForm((prev) => ({ ...prev, tipo: value }))}
								>
									<SelectTrigger id="tipo" className="h-12">
										<SelectValue placeholder="Selecione" />
									</SelectTrigger>
									<SelectContent>
										{Object.entries(PROJECT_TYPES).map(([value, label]) => (
											<SelectItem key={value} value={value}>
												{label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-2 sm:col-span-2">
								<Label htmlFor="mensagem" className="text-navy">Mensagem</Label>
								<Textarea
									id="mensagem"
									value={form.mensagem}
									onChange={update('mensagem')}
									placeholder="Conte um pouco sobre o seu projeto ou sua necessidade..."
									rows={4}
								/>
							</div>
						</div>

						<button
							type="submit"
							className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-gold-foreground shadow-md shadow-gold/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/35 active:scale-[0.98] sm:w-auto"
						>
							<Send className="h-5 w-5" />
							Enviar pelo WhatsApp
						</button>
					</form>
				</Reveal>
			</div>
		</section>
	);
}
