/**
 * Created by Andolsi on 28/02/2018.
 */

import mainCrtl from './main/mainController';
import homeCrtl from './home/homeController';
import helloCrtl from './hello/helloController';

class config {
    constructor($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('layout', {
                templateUrl: 'views/src/app/main/layout.html',
                controller: mainCrtl,
                resolve: {

                },
            })
            .state('layout.home', {
                url: "/",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/home/homeView.html',
                        controller: homeCrtl,
                    },
                },
                resolve: {
                    data : function(homeService){
                        return homeService.getData();
                    },
                },
            })

            .state('layout.hello', {
                url: "/hello",
                views: {
                    'content': {
                        templateUrl: 'views/src/app/hello/helloView.html',
                        controller: helloCrtl,
                    },
                },
                resolve: {

                },
            })
    }
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;