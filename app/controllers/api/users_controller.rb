class Api::UsersController < ApplicationController

    def index 
        @users = User.all
        render :index 
    end

    def create 

        @user = User.new(user_params)

        if @user.save
 
            login(@user)
            render :show
        else 
            render @user.errors.full_messages, status: 400
        end

    end




    private
    
    def user_params
        params.require(:user).permit(:email, :password, :username)
    end
end
