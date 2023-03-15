class Review < ApplicationRecord
    #relationshsips
    belongs_to :user
    has_many :comments
    has_one :location

    #validation
    validates :experience, presence: true
    validates :safeness, presence: true
    validates :place_name, presence: true
end
