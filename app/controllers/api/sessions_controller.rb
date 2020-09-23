class SessionsController < ApplicationController
  
  
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user    
      login_user(@user)
      redirect_to users_url
    else 
      flash[:errors] = ['Invalid email or password']
      render :new
    end 
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ["invalid credentials"], status: 400
    end
  end


end
