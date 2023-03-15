Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :destroy]
  resources :locations, only: [:index, :show, :create, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

#testing
#get '/hello', to: 'application#hello_world'
end
