class TaskSerializer < ActiveModel::Serializer
  attributes :id, :task, :importance
  has_one :user
  has_one :category
end
