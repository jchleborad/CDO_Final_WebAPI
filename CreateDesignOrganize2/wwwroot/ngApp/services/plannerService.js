class PlannerService {
    constructor($resource) {
        this.PlannerResource = $resource("api/planners/:id");
    }
    getPlanners() {
        return this.PlannerResource.query();
    }
}

angular.module("myApp").service("plannerService", PlannerService);