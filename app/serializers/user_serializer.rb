class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :profile_img

  has_many :reviews
  has_many :comments
end
