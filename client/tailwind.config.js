module.exports = {
    // mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    // specify other options here
    theme: {
        extend: {
            animation: {
                "spin-fast": "spin 300ms linear",
            }
        }
    },
    variants: {
        animation: ["active"],
    }
};
