class Api::channelssController < ApplicationController  
    
    def show 
        @channels = channels.includes(:users).find_by(id: params[:id])
    end 

    def index 
        @channelss = channels.all.includes(:users)

        byebug
    end 
    
    def create 
        @channels = channels.new(channelss_params)
        if @channels.save 
            render :show #do we need to save users?
        else
            render @channels.errors.full_messages, status: 400
        end
    end

    def update 
        @channels = channels.find(params[:id])
        if @channels.update(channelss_params)
            render :show 
        else
            render json: @channels.errors.full_messages, status: 422
        end
    end

    def destroy 
        @channels = channels.find(params[:id])
        if @channels.destroy 
            render :show 
        else
             render json: @channels.errors.full_messages, status: 422
        end
    end


    private 

    def channelss_params
        params.require(:channels).permit(:name, :description, :admin_id, :private)
    end
end