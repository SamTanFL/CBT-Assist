class GoalsController < ApplicationController

    def index
        if !current_user.nil?
            @goals = Goal.where(user: current_user)
             respond_to do |format|
                format.html
                format.json { render json: @goals }
            end
        else
            @user = false
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

    def update
        @goal = Event.find(params[:id])
        @goal.update(goal_params)
    end

    private

    def goal_params
        params.require(:goal).permit(:title, :description)
    end

end