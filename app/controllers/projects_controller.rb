class ProjectsController < ApplicationController

  private

  def project_params
    params.require(:project).permit(:name, :github_link, :deployed_link, :description, :screenshot, :user_id)
  end
end
