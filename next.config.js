module.exports = {
    exportTrailingslash: true,
    exportPathMap: function(){
        const paths = {
            "/": {page: "/"},
            "/blog": {page: "/Blog"},
            "/contact": {page: "/Contact"}
        };
        return paths;
    }
};