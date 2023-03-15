class Review < ApplicationRecord
    #relationshsips
    belongs_to :user
    belongs_to :location
    has_many :comments, dependent: :destroy

    #validation
    validates :experience, presence: true
    validates :safeness, presence: true
    validates :place_name, presence: true
end
