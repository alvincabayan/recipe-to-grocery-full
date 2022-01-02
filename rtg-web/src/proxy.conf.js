const itrmsBackendUrl = process.env.itrmsBackendUrl || 'http://localhost:8080';
const PROXY_CONFIG = [
    {
        context: ['/api'],
        pathRewrite: {
            '^/api': '/'
        },
        target: itrmsBackendUrl,
        secure: false,
        changeOrigin: true,
        autoRewrite: true
    }
];

module.exports = PROXY_CONFIG;