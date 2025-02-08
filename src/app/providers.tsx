'use client';

import dynamic from 'next/dynamic';

const ThemeProviderNoSSR = dynamic(
	() => import('next-themes').then((mod) => mod.ThemeProvider),
	{
		ssr: false,
	}
);

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProviderNoSSR attribute="class" defaultTheme="system" enableSystem>
			{children}
		</ThemeProviderNoSSR>
	);
}
