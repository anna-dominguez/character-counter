import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
	return (
		<header className="py-4 lg:py-8 flex justify-between">
			<div>
				<img
					src="/images/logo-dark-theme.svg"
					alt="Logo"
					className="hidden dark:block"
				/>
				<img
					src="/images/logo-light-theme.svg"
					alt="Logo"
					className="dark:hidden block"
				/>
			</div>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
