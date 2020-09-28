class Api::ChannelsController < ApplicationController  
    
    def show  
        @channel = Channel.find(params[:id])
        render 'api/channels/show'
    end

    def index 
        @channels = Channel.all
        render :index 
    end


    def create 
        @channel = Channel.new(channels_params)
        if @channel.save 
            render :show 
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