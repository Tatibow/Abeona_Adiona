class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address

  has_many :reviews
end
