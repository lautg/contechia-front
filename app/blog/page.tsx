import type { Metadata } from 'next';

import { DevelopingPage } from '@/components';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Blog',
};

const BlogPage = () => {
	return <DevelopingPage />;
};

export default BlogPage;
