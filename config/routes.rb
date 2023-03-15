Rails.application.routes.draw do
  resources :comments
  resources :locations
  resources :reviews
  resources :users
#testing
get '/hello', to: 'application#hello_world'
end
