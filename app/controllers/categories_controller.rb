class CategoriesController < ApplicationController
    skip_before_action :authorize

    # GET/categories
    def index
        render json: Category.all
    end

    # GET/categories/:id
    def show
        render json: find_category
    end

    private 
    def find_category
        Category.find(params[:id])
    end
end
