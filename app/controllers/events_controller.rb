class EventsController < ApplicationController

    def index
        @events = Event.where(user: current_user)
        if @events.length > 0
            respond_to do |format|
                format.html
                format.json { render json: @events }
            end
        else
            respond_to do |format|
                format.html
                format.json { render json: [] }
            end
        end
    end

    def create
        @event = Event.new(event_params)
        @event.user = current_user
        @event.goal = Goal.find(params[:goal])
        byebug
        if @event.save
            p "saved"
        else
            p "not saved"
        end
    end

    private

    def event_params
        params.require(:event).permit(:title, :description, :thoughts, :feelings, :behaviours, :goal)
    end

end