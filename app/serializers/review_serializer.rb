class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :place_name, :experience, :recommendations, :safeness, :review_likes, :user_id, :location_id, :reviewer, :address

  belongs_to :location
  has_many :comments

  def reviewer
     object.user.username
  end

  def address
    object.location.address
  end
end
