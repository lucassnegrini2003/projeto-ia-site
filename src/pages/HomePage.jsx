import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from 'sonner';
import Seo from '@/components/Seo';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import SolarBenefits from '@/components/landing/SolarBenefits';
import Services from '@/components/landing/Services';
import WhyUs from '@/components/landing/WhyUs';
import HowItWorks from '@/components/landing/HowItWorks';
import CtaBanner from '@/components/landing/CtaBanner';
import Faq from '@/components/landing/Faq';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import WhatsAppFloat from '@/components/landing/WhatsAppFloat';
import { HERO_IMAGE } from '@/lib/constants';

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title>TL Engenharia | Engenharia e Consultoria em Energia Solar e Elétrica</title>
				<meta
					name="description"
					content="A TL Engenharia é especializada em engenharia e consultoria: projetos técnicos, análises de viabilidade, dimensionamento de sistemas, recomendações de equipamentos e estudos de eficiência energética. Solicite uma consultoria."
				/>
			</Helmet>
			<Seo
				title="TL Engenharia | Engenharia e Consultoria em Energia Solar e Elétrica"
				description="Engenharia e consultoria: projetos técnicos, análises de viabilidade, dimensionamento, recomendações de equipamentos e estudos de eficiência energética."
				image={HERO_IMAGE}
				siteName="TL Engenharia"
			/>
			<Header />
			<main>
				<Hero />
				<About />
				<SolarBenefits />
				<Services />
				<WhyUs />
				<HowItWorks />
				<CtaBanner />
				<Faq />
				<Contact />
			</main>
			<Footer />
			<WhatsAppFloat />
			<Toaster richColors position="top-center" />
		</>
	);
}
