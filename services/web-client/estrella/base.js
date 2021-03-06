const path = require("path")
const { nodeExternalsPlugin } = require("esbuild-node-externals")

const baseConfig = {
    entry: path.join(__dirname, "../src/app.ts"),
    outfile: path.join(__dirname, "../dist/app.js"),
    bundle: true,
    platform: "node",
    plugins: [nodeExternalsPlugin()]
}

module.exports = baseConfig
