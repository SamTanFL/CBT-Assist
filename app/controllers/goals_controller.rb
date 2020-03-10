class GoalsController < ApplicationController

    def index
        @goals = Goal.where(user: current_user)
         respond_to do |format|
            format.html
            format.json { render json: @goals }
        end
    end

    def create
        @goal = Goal.new(goal_params)
        @goal.user = current_user
        if @goal.save
            p "saved"
        else
            p "not saved"
        end
    end

    private

    def goal_params
        params.require(:goal).permit(:title, :description)
    end

end