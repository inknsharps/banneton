/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: "/",
        src: "/dist"
    },
    plugins: ["@snowpack/plugin-postcss"],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        bundle: true,
        minify: true,
<<<<<<< HEAD
        target: "es2018"
=======
        target: "es2018",
>>>>>>> main
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        tailwindConfig: "./tailwind.config.js"
    },
    buildOptions: {
        /* ... */
    }
};
