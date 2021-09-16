const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'adi',
                mongodb_password: 'twD8AewoVTVADhF7',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'acblog-dev',
            },
        };
    }

    return {
        env: {
            mongodb_username: 'adi',
            mongodb_password: 'twD8AewoVTVADhF7',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'acblog',
        },
    };
};
