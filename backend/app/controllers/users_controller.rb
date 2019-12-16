class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user, include: '**'
  end


  def create
    byebug
    user = User.create(user_params)
    if user.valid?
      render json: user
    else
      render json: user_params
      # render json: {
      #   errors: 'This username is already taken!'
      # }

    end
  end

  def update
    user = User.find(params[:id])
    user.user_params
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :email, :zipcode)
  end


end
