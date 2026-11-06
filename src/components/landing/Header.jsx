import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				scrolled || open
					? 'bg-navy/95 shadow-lg shadow-navy/30 backdrop-blur-md'
					: 'bg-gradient-to-b from-navy via-navy/90 to-navy/50'
			}`}
		>
			<div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:h-24 sm:px-6 lg:h-28 lg:px-8">
				<a href="#inicio" className="flex min-h-[44px] min-w-0 flex-1 items-center sm:flex-none" aria-label="TL Engenharia — Início">
					<img
						src="https://horizons-cdn.hostinger.com/2babbe76-cea2-41d8-a5a3-9316b2bf0977/4ff19c63a84e60ad31db6709fabfa1f3.png"
						alt="TL Engenharia"
						className="h-16 w-auto max-w-full object-contain sm:h-20 lg:h-24"
					/>
				</a>

				<nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
					{NAV_LINKS.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<a
						href="#contato"
						className="hidden min-h-[44px] items-center justify-center rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-md shadow-gold/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/35 active:scale-[0.98] lg:inline-flex"
					>
						Solicitar orçamento
					</a>
					<button
						type="button"
						onClick={() => setOpen((v) => !v)}
						className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
						aria-label={open ? 'Fechar menu' : 'Abrir menu'}
						aria-expanded={open}
					>
						{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</div>

			{open && (
				<div className="border-t border-white/10 bg-navy/95 backdrop-blur-md lg:hidden">
					<nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Navegação móvel">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-gold"
							>
								{link.label}
							</a>
						))}
						<a
							href="#contato"
							onClick={() => setOpen(false)}
							className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-md shadow-gold/25 active:scale-[0.98]"
						>
							Solicitar orçamento
						</a>
					</nav>
				</div>
			)}
		</header>
	);
}
