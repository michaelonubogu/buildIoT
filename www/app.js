
var app = angular.module('buildIoT', ['ngRoute', 'angularFileUpload']);

app.config(function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    /*app.controllerProvider = $controllerProvider;
    app.compileProvider    = $compileProvider;
    app.routeProvider      = $routeProvider;
    app.filterProvider     = $filterProvider;
    app.provide            = $provide;*/

    //Load the landing page into template cache so that it is available when the site starts
    /*app.run(['$templateCache', function($templateCache) {
        $templateCache.put('views/home.html');
    }]);*/

    $routeProvider
        .when('/home', {templateUrl: 'views/home.html', controller: 'HomeController'})
        .when('/upload', { templateUrl: 'views/upload.html', controller: 'UploadController' })
        .when('/recipes', { templateUrl: 'views/recipes.html', controller: 'RecipeController' })
        .otherwise({ redirectTo: '/home' });
});

