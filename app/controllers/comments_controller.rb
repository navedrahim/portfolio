class CommentsController < ApplicationController
  before_action :authorize_request, only: [:show, :update, :destroy]

  def index
    comments = Comment.all
    render json: comments
  end

  def show
    render json: @comment
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment, status: :created
    else
      render json: comment.errors, status: :unproccesable_entity
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment, status: :ok
    else
      render json: comment.errors, status: unproccesable_entity
    end
  end

  def destroy
    @comment.destroy
  end


  private

  def comment_params
    params.require(:comment).permit(:email, :message)
  end

  def get_comment
    @comment = Comments.find(params[:id])
  end
end
