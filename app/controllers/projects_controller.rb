class ProjectsController < ApplicationController
  before_action :get_project, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:update, :create, :destroy]

  def index
    @projects = Project.all
    render json: @projects
  end

  def show
    render json: @project
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def update
    if @project.update(project_params)
      render json: @project, status: :ok
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @project.destroy
  end 

  private

  def get_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :github_link, :deployed_link, :description, :screenshot, :user_id)
  end
end
