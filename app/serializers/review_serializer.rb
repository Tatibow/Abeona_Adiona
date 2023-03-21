class ReviewSerializer < ActiveModel::Serializer
 attributes :id, :place_name, :experience, :reccommendations, :safeness, :review_likes, :user_id, :location_id

  belongs_to :location
  belongs_to :user

  has_many :comments
end
