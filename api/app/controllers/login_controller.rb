class LoginController < ApplicationController

  def create
    if params[:username] == nil || params[:username] == ''
      render json: { errors: [ "Username can't be blank" ] }, status: :unprocessable_entity
    else
      user = User.find_by("lower(username) = ?", params[:username].downcase)
      if user && user.authenticate(params[:password])
        render json: { token: token(user.id), user_id: user.id }
      else
        render json: { errors: [ "Your username or password is incorrect. Please try again." ] }, status: :unprocessable_entity
      end
    end
  end

end
