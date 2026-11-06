export const WHATSAPP_NUMBER = '5551983362003';
export const WHATSAPP_DISPLAY = '(51) 98336-2003';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappLinkWithMessage = (message) =>
	`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE =
	'Olá! Gostaria de solicitar uma consultoria com a TL Engenharia.';

export const EMAIL = 'tlengenhariaeletrica@gmail.com';
export const ADDRESS = 'Novo Hamburgo - RS';
export const SERVICE_AREA = 'Atendimento em todo o Rio Grande do Sul';
export const INSTAGRAM_URL = 'https://instagram.com/tlengeletrica';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tl-engenharia-4a0396432?utm_source=share_via&utm_content=profile&utm_medium=member_android';

export const HERO_IMAGE =
	'https://images.hostinger.com/ac95e78a-1e07-4e9d-9618-e08819cc5be9.png';
export const ABOUT_IMAGE =
	'https://images.hostinger.com/49df6705-f6c9-4294-bf04-ffefa1f045fd.png';

export const NAV_LINKS = [
	{ label: 'Início', href: '#inicio' },
	{ label: 'Sobre', href: '#sobre' },
	{ label: 'Energia Solar', href: '#energia-solar' },
	{ label: 'Serviços', href: '#servicos' },
	{ label: 'Benefícios', href: '#beneficios' },
	{ label: 'FAQ', href: '#faq' },
	{ label: 'Contato', href: '#contato' },
];
