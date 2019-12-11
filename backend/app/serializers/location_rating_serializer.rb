class LocationRatingSerializer < ActiveModel::Serializer
  attributes :id, :rate, :comment
  has_one :user
  has_one :my_location
end
