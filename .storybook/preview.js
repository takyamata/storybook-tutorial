import "../src/index.css";
import { initialize, mswLoader } from 'msw-storybook-addon'

// Initialize MSW
initialize()

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	// Provide the MSW addon loader globally
	loaders: [mswLoader],
};

export default preview;
