import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		start: 'Start'
	}
});

export default app;