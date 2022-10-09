class TasksController < ApplicationController
    skip_before_action :authorize
   
    # GET/tasks
    def index
        render json: Task.all
    end

    #  GET/tasks/:id
    def show
        render json: find_task
    end

    # POST/tasks
    def create
        task = Task.create!(task_params)
        render json: task, status: :created
    end

    # PATCH/:id
    def update
        task = find_task
        task.update!(task_params)
        render json: task
    end

    # DELETE/:id
    def destroy
        find_task.destroy
        head :no_content
    end

    private
    def find_task
        Task.find(params[:id])
    end

    def task_params
        params.permit(:category_id, :user_id, :task, :importance)
    end

end
