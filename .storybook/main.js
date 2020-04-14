module.exports = {
    stories: ["../src/**/*.stories.js"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
    ],
};
