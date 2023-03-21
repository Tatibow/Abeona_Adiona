class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :review_id, :user_id

  belongs_to :review
  belongs_to :user
end
