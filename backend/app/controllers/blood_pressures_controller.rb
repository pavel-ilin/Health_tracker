class BloodPressuresController < ApplicationController

  def create
    # byebug
    blood_pressure_test = BloodPressure.create(submit_params)
    render json: blood_pressure_test
  end

  private

  def submit_params
    params.require(:blood_pressure).permit(:systolic, :diastolic, :puls, :stress_level, :user_id)

  end

end
