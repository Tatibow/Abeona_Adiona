class Location < ApplicationRecord
    #relationships
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    #validations
     validates :address, presence: true
end
