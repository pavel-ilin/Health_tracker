class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
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

  def show
    user = User.find(params[:id])
    render json: user, include: '**'
  end


  def update
    user = User.find(params[:id])
    user.user_params
    render json: user
  end

  private

  def user_params
    params.require(:user).permite(:username, :password, :name, :email, :zipcode)
  end

end
