class MetabolicPanelsController < ApplicationController

  def create
    metabolic_panel = MetabolicPanel.create(submit_params)
    render json: metabolic_panel
  end

  private

  def submit_params
    params.require(:metabolic_panel).permit(:sodium, :glucose, :calcium, :user_id)
  end

end