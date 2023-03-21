class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def comment_index
        review = find_review
        comments = review.comments
        render json: comments, includes: :review
    end

    def show
        review = find_review
        render json: user, status: :ok
    end

    def create
        review  = Review.create!(review_params)
        render json:review, status: :created
    end

    def update
        review = find_review
        review.update!(review_parmas)
        render json: review, status: :ok
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:place_name, :experience, :reccommendations, :safeness, :review_likes, :user_id, :location_id )
    end
end
