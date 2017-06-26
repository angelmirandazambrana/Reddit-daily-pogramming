var config={
    port: 3000,
    secret:"ajKveHajYnReuJXw",
    redisURL: 'redis://localhost',
    redisPort: 6379,
    routes: {
        login: '/login',
        logout: '/logout'
    }
};

module.exports=config;