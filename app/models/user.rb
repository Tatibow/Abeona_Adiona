class User < ApplicationRecord
    #relationships
    has_many :reviews
    has_many :comments
    has_secure_password

    #validations
     validates :username, presence: true
     validates :username, uniqueness: true

     validates :email, presence: true
     validates :email, uniqueness: true

     validates :password, presence: true
     validates :password, length: {minimum:6, maximum:15}
     validates :password, confirmation: true
end
