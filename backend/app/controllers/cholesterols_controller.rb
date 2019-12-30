class CholesterolsController < ApplicationController


  def create
    cholesterol_test = Cholesterol.create(submit_params)
    render json: cholesterol_test
  end

  private

  def submit_params
    params.require(:cholesterol).permit(:ldl, :hdl, :triglycerides, :total_cholesterol, :user_id)
  end

end
