class VitaminePanelsController < ApplicationController

  def create
    vitamine_panel = VitaminePanel.create(submit_params)
    render json: vitamine_panel
  end

  private

  def submit_params
    params.require(:vitamine_panel).permit(:d, :b12, :a1, :user_id)
  end

end