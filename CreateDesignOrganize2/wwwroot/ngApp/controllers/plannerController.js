class PlannerController {
    constructor(plannerService) {

        this.planners = plannerService.getPlanners();

    }
}
