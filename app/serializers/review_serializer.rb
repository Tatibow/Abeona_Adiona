class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :place_name, :experience, :reccommendations, :safeness, :review_likes, :user_id
end
