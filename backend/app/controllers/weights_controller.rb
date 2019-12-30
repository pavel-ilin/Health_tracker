class WeightsController < ApplicationController

  def create
    weight_test = Weight.create(submit_params)
    render json: weight_test
  end

  private

  def submit_params
    params.require(:weight).permit(:weight, :user_id)
  end

end
