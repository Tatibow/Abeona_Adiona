class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    # def show
    #     user = find_user
    #     render json: user, status: :ok
    # end

    def create
        user  = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    def me
        render json: @current_user, status: :ok
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :email, :profile_img, :password_confirmation)
    end


end
