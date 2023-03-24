class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json:comment, status: :created
    end

    def update
        comment = Comment.find(params[:id])
        comment.update!(comment_params)
        render json: comment, status: :ok 
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:content,:comment_likes, :review_id)
    end
end
