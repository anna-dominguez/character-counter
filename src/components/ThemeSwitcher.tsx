import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className="bg-neutral-100 dark:bg-neutral-700 rounded-lg px-2"
		>
			<img
				src="/images/icon-sun.svg"
				alt="Logo"
				className="hidden dark:block"
			/>
			<img
				src="/images/icon-moon.svg"
				alt="Logo"
				className="dark:hidden block"
			/>
		</button>
	);
};

export default ThemeSwitcher;
