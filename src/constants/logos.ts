interface Logo {
	title: string;
	image: string;
	path: string;
	colors: string[];
}

export const logos: Record<string, Logo> = {
	git: {
		image: '/logos/git.png',
		title: 'Git',
		path: '/logo/git',
		colors: ['#F05033']
	},
	netflix: {
		image: '/logos/netflix.png',
		title: 'Netflix',
		path: '/logo/netflix',
		colors: ['#E50914', '#B1060F']
	},
	youtube: {
		image: '/logos/youtube.png',
		title: 'YouTube',
		path: '/logo/youtube',
		colors: ['#FF0000']
	},
	instagram: {
		image: '/logos/instagram.png',
		title: 'Instagram',
		path: '/logo/instagram',
		colors: ['#FEDA80', '#F35C3D', '#CF3187', '#4867D7']
	},
	google: {
		image: '/logos/google.png',
		title: 'Google',
		path: '/logo/google',
		colors: ['#EB4335', '#FBBC05', '#34A853', '#4285F4']
	},
	microsoft: {
		image: '/logos/microsoft.png',
		title: 'Microsoft',
		path: '/logo/microsoft',
		colors: ['#F35325', '#81BC06', '#05A6F0', '#FFBA08']
	},
	figma: {
		image: '/logos/figma.png',
		title: 'Figma',
		path: '/logo/figma',
		colors: ['#F24E1E', '#FF7262', '#A259FF', '#1ABCFE', '#0ACF83']
	},
	dropbox: {
		image: '/logos/dropbox.png',
		title: 'Dropbox',
		path: '/logo/dropbox',
		colors: ['#007EE5']
	},
	spotify: {
		image: '/logos/spotify.png',
		title: 'Spotify',
		path: '/logo/spotify',
		colors: ['#1ED760']
	},
	'google-photos': {
		image: '/logos/google-photos.png',
		title: 'Google Photos',
		path: '/logo/google-photos',
		colors: ['#E54132', '#F6B700', '#31A452', '#4080EF']
	},
	react: {
		image: '/logos/react.png',
		title: 'React',
		path: '/logo/react',
		colors: ['#61DAFB']
	},
	'dominos-pizza': {
		image: '/logos/dominos-pizza.png',
		title: "Domino's Pizza",
		path: '/logo/dominos-pizza',
		colors: ['#E31837', '#006491']
	}
};

export default logos;
