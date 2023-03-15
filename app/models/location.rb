class Location < ApplicationRecord
    #relationships
    belongs_to :review

    #validations
     validates :address, presence: true 
end
