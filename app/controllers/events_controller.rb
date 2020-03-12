class EventsController < ApplicationController

    def index
        if params.has_key?(:id)
            @events = Event.find(params[:id])
        elsif params.has_key?(:goal)
            @events = Event.where(user: current_user).where(goal: params[:goal])
        else
            @events = Event.where(user:current_user)
        end
        respond_to do |format|
            format.html
            format.json { render json: @events }
        end
    end

    def create
        @event = Event.new(event_params)
        @event.user = current_user
        @event.goal = Goal.find(params[:goal])
        if @event.save
            p "saved"
        else
            p "not saved"
        end
    end

    def update
        id = params[:id].to_i
        @event = Event.find(params[:id])
        @event.update(event_params)
    end

    def delete
        @event = Event.find(params[:id])
        @event.destory
    end

    private

    def event_params
        params.require(:event).permit(:title, :description, :thoughts, :feelings, :behaviours, :id)
    end

end

=begin
        if params[:id].blank? && params[:goal].blank?
            @events = Event.where(user:current_user)
        elsif params[:goal].blank?
            @events = Event.find(params[:id])
        else
            @events = Event.where(user: current_user).where(goal: params[:goal])
        end
=end