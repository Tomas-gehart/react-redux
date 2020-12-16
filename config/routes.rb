Rails.application.routes.draw do
  get 'rooms/show'
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :index, :update]
      resource :session, only: [:create, :destroy]
      resources :channelss, only: [:show, :create, :index]

    end
  


  root to: "static_pages#root"
  root to: 'rooms#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
