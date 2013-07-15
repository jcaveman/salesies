var App = App || {};

App = (function(d, $, App) {

    var $routerLinks = $('.router');

    var routerLinkClickHandler = function(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
    ;
        $('.container .content .responsive').load(target);
    }

    $routerLinks.on('click', routerLinkClickHandler);
    
    return App;

})(document, jQuery, App);