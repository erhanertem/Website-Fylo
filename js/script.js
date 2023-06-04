const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
	//prefers-color-scheme is a CSS media feature to detect if a user has requested a light/dark color theme thru their operating system settings. window.matchMedia(...css feature) establishes a mediaquerylist. Mediaquerylist has a instance property of matches which returns a boolean value.
) {
	// Show light icon if darkmode true
	themeToggleLightIcon.classList.remove('hidden');
} else {
	// Show dark icon since darkmode is false
	themeToggleDarkIcon.classList.remove('hidden');
}

//Listen for toggle btn click
themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
	//Toggle Icon
	themeToggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	//If is set in localStorage
	if (localStorage.getItem('color-theme')) {
		// If light, make dark and save in localStorage
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
	}
	// If not in localStorage
	else {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		}
	}
}
