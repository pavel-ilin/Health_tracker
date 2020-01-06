class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end


  def create
    user = User.create(user_params)
    if user.valid?
      render json: user
    else
      render json: {
        errors: 'This username is already taken!'
      }
    end
  end

  def update
    user = User.find(params[:id])
    if user_params[:password] == '' || user_params[:password] == nil
      render json: {errors: "Password can't be blank"}
    else
      user.update(user_params)
      render json: user
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :email, :zipcode)
  end


end
