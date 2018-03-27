angular.module('myApp', ["ui.router", "ngCart","ngResource"]).config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routing($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: HomeController,
            controllerAs: 'controller'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: AboutController,
            controllerAs: 'controller'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/ngApp/views/contact.html',
            controller: ContactController,
            controllerAs: 'controller'
        })
        .state('planners', {
            url: '/planners',
            templateUrl: '/ngApp/views/planners.html',
            controller: PlannerController,
            controllerAs: 'controller'
        })
        .state('exercise', {
            url: '/exercise',
            templateUrl: '/ngApp/views/exercise.html',
            controller: ExerciseController,
            controllerAs: 'controller'
        })
        .state('lifestyle', {
            url: '/lifestyle',
            templateUrl: '/ngApp/views/lifestyle.html',
            controller: LifestyleController,
            controllerAs: 'controller'
        })
        .state('templates', {
            url: '/templates',
            templateUrl: '/ngApp/views/templates.html',
            controller: TemplatesController,
            controllerAs: 'controller'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/ngApp/views/login.html',
            controller: LoginController,
            controllerAs: 'controller'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: RegisterController,
            controllerAs: 'controller'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '/ngApp/views/admin.html',
            controller: AdminController,
            controllerAs: 'controller'
        })
        .state('shoppingCart', {
            url: '/shoppingCart',
            templateUrl: '/ngApp/views/shoppingCart.html',
            controller: ShoppingCartController,
            controllerAs: 'controller'
        })
        .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
    $urlRouterProvider.otherwise('/notFound');
    $locationProvider.html5Mode(true);

}

function disableRightClick() {
    alert("SNAP!\n\nImages are \©2017 Create, Design, Organize! unless purchased.");
    return false;
}

