class GoalsController < ApplicationController

    def index
        @goals = Goal.where(user: current_user)
        @events = Event.where(user: current_user)
    end

end