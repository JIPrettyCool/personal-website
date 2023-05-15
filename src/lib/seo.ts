import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'meric.';
	const description = "Hey 👋 It's Meric";

	return {
		title,
		description,
		canonical: `https://meric.vercel.app/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'meric',
			url: `https://meric.vercel.app/${router.asPath}`,
			type: 'website',
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@iamrealji',
			site: '@iamrealji',
		},
		...props,
	};
}
