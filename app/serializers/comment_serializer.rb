class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :review_id
end
