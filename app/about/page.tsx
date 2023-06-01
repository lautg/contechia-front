import type { Metadata } from 'next';

import { DevelopingPage } from '@/components';

export const metadata: Metadata = {
	title: 'Acerca de',
	description: 'Acerca de',
};

const AboutPage = () => {
	return <DevelopingPage />;
};

export default AboutPage;
