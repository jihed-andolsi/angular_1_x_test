/**
 * Created by Andolsi on 28/02/2018.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import mainController from './home/homeController';
import homeService from './home/homeService';
import config from './app.routes';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter]).config(config)
    .service('homeService', homeService);

export default MODULE_NAME;