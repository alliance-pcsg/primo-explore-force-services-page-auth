angular
  .module('forceServicesPageAuth', [])
  .component('prmAuthenticationAfter', {
    bindings: { parentCtrl: '<' },
    controller: ['$location', function ($location) {
      if (($location.search().isSerivcesPage || $location.search().isServicesPage) && !this.parentCtrl.isLoggedIn) {
        this.parentCtrl.loginService.handleLoginClick()
      }
    }]
  })
