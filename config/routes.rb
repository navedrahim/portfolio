Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/users/verify", to: "users#verify"
  post "/users/login", to: "users#login"
  resources :users
  resources :projects
  resources :comments
end
