Rails.application.routes.draw do

    devise_for :users
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


    root 'goals#index'

    get '/goals' => 'goals#index'
    post '/goals' => 'goals#create', as: 'create_goal'

end
