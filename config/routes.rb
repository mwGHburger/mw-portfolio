Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects, :path => "portfolio", only: [:index]
  resources :blogs, only: [:index]
  get '/about', to: 'pages#about', as: 'about'
end
