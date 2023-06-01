import type { Metadata } from 'next';

import { DevelopingPage } from '@/components';

export const metadata: Metadata = {
	title: 'Foro',
	description: 'Foro de la comunidad',
};

const ForumPage = () => {
	return <DevelopingPage />;
};

export default ForumPage;
