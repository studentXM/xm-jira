module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "react-hooks"],
    rules: {
        // 重新配置 react-hooks 相关内容
        "react-hooks/rules-of-hooks": "error",
        // react 必须引入 的警告  关闭
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        eqeqeq: "off",
        curly: "error",
        quotes: ["error"],
    },
    ignorePatterns: ["webpack.common.js", "webpack.dev.js", "webpack.prod.js"],
    settings: {
        react: {
            createClass: "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: "React", // Pragma to use, default to "React"
            fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
            version: "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // It will default to "latest" and warn if missing, and to "detect" in the future
            flowVersion: "0.53", // Flow version
        },
        propWrapperFunctions: [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            { property: "freeze", object: "Object" },
            { property: "myFavoriteWrapper" },
            // for rules that check exact prop wrappers
            { property: "forbidExtraProps", exact: true },
        ],
        componentWrapperFunctions: [
            // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
            "observer", // `property`
            { property: "styled" }, // `object` is optional
            { property: "observer", object: "Mobx" },
            { property: "observer", object: "<pragma>" }, // sets `object` to whatever value `settings.react.pragma` is set to
        ],
        formComponents: [
            // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
            "CustomForm",
            { name: "Form", formAttribute: "endpoint" },
        ],
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            { name: "Link", linkAttribute: "to" },
        ],
    },
}
