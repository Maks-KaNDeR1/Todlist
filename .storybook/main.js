module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
<<<<<<< HEAD
        '@storybook/preset-create-react-appActions',
=======
        '@storybook/preset-create-react-app',
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.tsx?$/],
                },
                loaderOptions: {
                    prettierConfig: {
                        printWidth: 80, singleQuote: false,
                        options: {parser: 'typescript'}
                    },
                },
            },
        }
    ],
};

