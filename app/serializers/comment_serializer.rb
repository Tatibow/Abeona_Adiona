class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content,:comment_likes, :review_id

  belongs_to :review

end
