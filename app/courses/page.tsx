import type { Metadata } from 'next';

import { DevelopingPage } from '@/components';

export const metadata: Metadata = {
	title: 'Cursos',
	description: 'Cursos',
};

const CoursesPage = () => {
	return <DevelopingPage />;
};

export default CoursesPage;
