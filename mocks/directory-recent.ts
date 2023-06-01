interface DirectoryRecent {
	id: string;
	title: string;
	description: string;
	shortDescription: string;
	image: string;
	categories: string[];
}

export const getDirectoryRecent = () =>
	[
		{
			id: '3',
			title: 'AI-Writercom',
			description:
				'Genere contenido preciso, relevante y confiable en minutos. AI-Writer es la plataforma de generación de contenido más precisa, que utiliza modelos de escritura de inteligencia artificial de última generación para generar artículos con información que siempre puede verificar. Si no puede verificar todo lo que escribe una IA, ¿puede confiar en algo?',
			shortDescription:
				'Generación de contenido preciso y confiable: AI-Writer es una plataforma que utiliza IA de última generación para generar artículos verificables en minutos.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685565700/iagateway/6477b10395b1f4c8cb2f65ad/bcsd4rzzpfqlz4jo6cro.webp',
			categories: ['Texto', 'Generador de Texto', 'SEO', 'Marketing'],
		},
		{
			id: '1',
			title: 'A.V. Mapping',
			description:
				'Crea contenido para Marketing, has tu propio Diseño, Genera de Imágenes con IA igual, Video y Música, todo a un click.',
			shortDescription:
				'Crea contenido de marketing con un solo clic: Genera diseño, imágenes con IA, videos y música para tus estrategias de marketing de manera rápida y sencilla.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685138888/iagateway/64712dc60f4a1cc15a250570/mt83bszgl740wqmbdyzl.webp',
			categories: ['Marketing', 'Diseño', 'Generador de imágenes', 'Video', 'Música'],
		},
		{
			id: '2',
			title: 'AdCreativeai',
			description:
				'Inteligencia Artificial Creativos publicitarios y sociales Genere creatividades publicitarias centradas en la conversión y creatividades para publicaciones en redes sociales en cuestión de segundos utilizando la Inteligencia Artificial. Obtenga mejores resultados y ahorre tiempo.',
			shortDescription:
				'Creatividad publicitaria y social con IA: Obtén creatividades publicitarias centradas en la conversión y para redes sociales en segundos, ahorrando tiempo y mejorando los resultados.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685529750/iagateway/6477249595b1f4c8cb2e864c/y0vvgumlkwijpme4e560.webp',
			categories: [
				'Marketing',
				'Redes Sociales',
				'Texto',
				'Copywriting',
				'Presentaciones',
				'Influencers',
				'Diapositivas',
				'Ventas',
				'E-Commerce',
				'Análisis de Datos',
			],
		},
		{
			id: '9',
			title: 'Botowski',
			description:
				'El Bot De Escritura De Texto Definitivo Tener y administrar una estrategia de marketing correcta es crucial en un mercado en rápido movimiento. ¿Por qué no descargar parte del trabajo a su nuevo compañero impulsado por IA?',
			shortDescription:
				'Impulsa tu estrategia de marketing con un bot de escritura de IA: Descarga parte del trabajo a tu compañero impulsado por IA y optimiza tu estrategia de marketing.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685568530/iagateway/6477bc1295b1f4c8cb3020f8/qm75kgzwjcob6dil6yzc.webp',
			categories: ['Texto', 'Generador de Texto', 'SEO', 'Marketing', 'Copywriting'],
		},
		{
			id: '4',
			title: 'AISEO',
			description:
				'Transforme su proceso de escritura con AISEO.ai, el asistente de escritura de IA único en su tipo que ofrece contenido indetectable similar al humano con solo unos pocos clics.',
			shortDescription:
				'Asistente de escritura similar al humano: AISEO.ai ofrece contenido indetectable similar al humano con solo unos clics, mejorando tu proceso de escritura.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685567218/iagateway/6477b6f195b1f4c8cb2fbc65/be7t9iiwxeds6dj8sfc4.webp',
			categories: ['Redes Sociales', 'Marketing', 'SEO', 'Texto', 'Generador de Texto', 'Copywriting'],
		},
		{
			id: '6',
			title: 'Article Forge',
			description:
				'Get HIGH QUALITY Content In One Click Using advanced artificial intelligence and deep learning, Article Forge writes entire 1,500+ word articles automatically. From product descriptions to whole blog posts, Article Forge delivers unique, SEO optimized, high-quality content about any topic with a single click.',
			shortDescription:
				'Article Forge: Obtén contenido único y de calidad sobre cualquier tema con un clic, gracias a la IA avanzada y el aprendizaje profundo.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685567803/iagateway/6477b93a95b1f4c8cb2fff4e/nvx0shlqx2sslfnrgi2g.webp',
			categories: ['SEO', 'Texto', 'Copywriting'],
		},
		{
			id: '7',
			title: 'Audiolabs',
			description:
				'Ponte en el centro de atención con clips premium de formato corto Obtenga sus videos editados profesionalmente a escala. Atrae a tu audiencia a tu mensaje. Haz un impacto. Haga crecer su negocio. ¡Únete ahora!',
			shortDescription:
				'Edición profesional de videos cortos: Destaca con clips premium de formato corto, atrae a tu audiencia y haz crecer tu negocio.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685140891/iagateway/6471349d0f4a1cc15a25835c/arfeaiivfgi21yibzxnt.jpg',
			categories: ['Redes Sociales', 'Video'],
		},
		{
			id: '5',
			title: 'Analogenie',
			description:
				'Escribe mejor con analogías. Explique mejor sus temas e impresione a los lectores el asistente de un clic para generar analogías contextuales para su contenido.',
			shortDescription:
				'Mejora tus textos con analogías: Impresiona a los lectores con un asistente de clic que genera analogías contextuales para explicar mejor tus temas.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685139672/iagateway/647130d80f4a1cc15a253fb7/i68hffjce51yofzdoiws.webp',
			categories: ['Texto', 'Marketing', 'Asistente'],
		},
		{
			id: '10',
			title: 'Canva Text to Image',
			description:
				'Descubre Canva, la herramienta que te permite crear diseños profesionales de forma rápida y sencilla. Con una amplia variedad de plantillas personalizables y recursos gráficos de alta calidad, podrás plasmar tu creatividad en proyectos impresionantes sin necesidad de ser un experto en diseño. Destaca en tus redes sociales, presentaciones y más con Canva.',
			shortDescription:
				'Crea diseños profesionales fácilmente y sorprende al mundo. Plasmar tus ideas nunca fue tan sencillo con las herramientas intuitivas y recursos variados de Canva.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685362051/iagateway/6474958295b1f4c8cb2d13a2/j9zhh0imgmw4ol50mpcu.webp',
			categories: [
				'Redes Sociales',
				'Video',
				'Marketing',
				'E-Commerce',
				'Ventas',
				'Presentaciones',
				'Influencers',
				'Diapositivas',
				'Análisis de Datos',
			],
		},
		{
			id: '8',
			title: 'BHuman',
			description:
				'Conexiones Humanas a escala. Produzca un solo video y personalicelo para miles de destinatarios. Entregue a traves de cualquier canal y mida los resultados al instante. Con la confianza de mas de 75000 empresas.',
			shortDescription:
				'Personalización de videos a gran escala: Crea y personaliza videos para miles de destinatarios, entregándolos a través de cualquier canal y midiendo resultados instantáneamente.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685531116/iagateway/647729eb95b1f4c8cb2ea69d/m8dyjh9mhqzgsqa2se0r.webp',
			categories: [
				'Redes Sociales',
				'Video',
				'Marketing',
				'E-Commerce',
				'Ventas',
				'Presentaciones',
				'Influencers',
				'Diapositivas',
				'Análisis de Datos',
			],
		},
		{
			id: '11',
			title: 'CAPTURELAB',
			description:
				'Cree videos de marketing de productos de alta calidad en minutos. CaptureLab es una plataforma de video de comercio electrónico que permite a las marcas crear videos de productos de alta calidad en minutos.',
			shortDescription:
				'Videos de marketing de productos en minutos: CaptureLab es una plataforma para crear videos de productos de alta calidad en poco tiempo.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685363547/iagateway/64749b0595b1f4c8cb2d1ecc/gayv7j2c24j9jhhps948.webp',
			categories: [
				'Redes Sociales',
				'Video',
				'Marketing',
				'E-Commerce',
				'Ventas',
				'Presentaciones',
				'Influencers',
			],
		},
		{
			id: '12',
			title: 'Clips AI',
			description:
				'Crecer orgánicamente reutilizando el contenido a escala. Clips AI lo ayuda a reutilizar automáticamente el contenido de audio o video de formato largo en clips de redes sociales y predice qué clips obtendrán la mayor participación.',
			shortDescription:
				'Reutiliza contenido y crece orgánicamente: Clips AI te ayuda a reutilizar automáticamente contenido de formato largo en clips de redes sociales, aumentando la participación.',
			image: 'https://res.cloudinary.com/dxswytaqf/image/upload/v1685363948/iagateway/64749cec95b1f4c8cb2d3962/gpcn7vfp4rsmfnayqjac.webp',
			categories: [
				'Redes Sociales',
				'Video',
				'Marketing',
				'E-Commerce',
				'Ventas',
				'Presentaciones',
				'Influencers',
			],
		},
	] satisfies DirectoryRecent[];
