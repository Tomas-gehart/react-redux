Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :messages, only: [:create, :update]
      resources :channels, only: [:index, :create, :show, :update]
      resources :user, only: [:create, :index, :update]
      resource :session, only: [:create, :destroy]
      resources :directmessages, only: [:index, :create, :update, :destroy]
    end
  


  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
