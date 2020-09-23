class API::UsersController < ApplicationController

    def index 
        @users = User.all
        render :index 
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login_user(@user)
            render :show
        else 
            flash[:errors] = @user.errors.full_messages, status: 400
        end

    end




    private
    
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
