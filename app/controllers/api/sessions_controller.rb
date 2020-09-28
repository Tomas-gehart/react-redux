class Api::SessionsController < ApplicationController
 
  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
      )
    if !@user
      render json: ['Whoops! We couldn’t find an account for that email address and password.'], status: 404
    else
      login(@user)
      render 'api/users/show'
      
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["invalid credentials"], status: 400
    end
  end


end
