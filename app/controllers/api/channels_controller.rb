class Api::roomsController < ApplicationController  
    
    def show 
        @room = room.includes(:users).find_by(id: params[:id])
    end 

    def index 
        @rooms = room.all.includes(:users)

        byebug
    end 
    
    def create 
        @room = room.new(rooms_params)
        if @room.save 
            render :show #do we need to save users?
        else
            render @room.errors.full_messages, status: 400
        end
    end

    def update 
        @room = room.find(params[:id])
        if @room.update(rooms_params)
            render :show 
        else
            render json: @room.errors.full_messages, status: 422
        end
    end

    def destroy 
        @room = room.find(params[:id])
        if @room.destroy 
            render :show 
        else
             render json: @room.errors.full_messages, status: 422
        end
    end


    private 

    def rooms_params
        params.require(:room).permit(:name, :description, :admin_id, :private)
    end
end