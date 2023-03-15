class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address, :review_id
end
