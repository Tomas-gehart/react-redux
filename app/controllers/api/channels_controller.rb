class Api::ChannelsController < ApplicationController  
    
    def show 
        @channel = Channel.includes(:users).find_by(id: params[:id])
    end 

    def index 
        @channels = Channel.all.includes(:users)

        byebug
    end 
    
    def create 
        @channel = Channel.new(channels_params)
        if @channel.save 
            render :show #do we need to save users?
        else
            render @channel.errors.full_messages, status: 400
        end
    end

    def update 
        @channel = Channel.find(params[:id])
        if @channel.update(channels_params)
            render :show 
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy 
        @channel = Channel.find(params[:id])
        if @channel.destroy 
            render :show 
        else
             render json: @channel.errors.full_messages, status: 422
        end
    end


    private 

    def channels_params
        params.require(:channel).permit(:name, :description, :admin_id, :private)
    end
end