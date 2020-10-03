var app = angular.module('naggaApp', ['toastr']);
app.config([
    'toastrConfig',
    function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            maxOpened: 1,
            newestOnTop: true,
            showMethod: 'slideDown',
            hideMethod: 'slideUp',
            positionClass: 'toast-top-center',
            preventDuplicates: true,
            preventOpenDuplicates: true,
            target: 'body',
            closeButton: true,
            extendedTimeOut: 0,
            timeOut: 5000
        });
    }]);

app.controller('loginRegisterController',
    function ($scope, $window, toastr) {
        $scope.tabs = {
            Login: 'Login',
            Register: 'Register'
        }

        $scope.activeTab = null;

        $scope.loginForm = {
            Username: "",
            Password: ""
        };

        $scope.registerForm = {
            Username: "",
            Email: "",
            Password: ""
        };

        $scope.register = function () {
            var registerModeljson = JSON.stringify($scope.registerForm);
            $window.mp.trigger('registerInformationToServer', registerModeljson);
        };

        $scope.login = function () {
            var loginModelJson = JSON.stringify($scope.loginForm);
            $window.mp.trigger('loginInformationToServer', loginModelJson);
        };

        $scope.showToastrMessage = function (message, toastrType) {
            switch (toastrType) {
                case 0:
                    toastr.success(message);
                case 1:
                    toastr.info(message);
                case 2:
                    toastr.warning(message);
                case 3:
                    toastr.error(message);
            }
        };

        $scope.setActiveTab = function (activeTab) {
            $scope.activeTab = activeTab;
        };

        $scope.init = function () {
            $scope.activeTab = $scope.tabs.Login;
        }

        $scope.init();
    });

function showToastrMessage(message, toastrType) {
    angular.element(document.getElementById('loginRegisterController')).scope().showToastrMessage(message, toastrType);
}