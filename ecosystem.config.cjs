module.exports = {
    apps: [
        {
            name: "mysql-manager",
            script: "src/server.js",
            watch: false,
            env: {
                NODE_ENV: "development",
                PORT: 3333
            }
        }
    ]
}