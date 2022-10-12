class User < ApplicationRecord
    has_many :tasks, dependent: :destroy

    has_secure_password 
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 4 },
            if: ->{ new_record? || !password.nil? }
end
