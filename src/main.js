import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Anton',
		surname: 'Datsyuk',
	}
});

export default app;