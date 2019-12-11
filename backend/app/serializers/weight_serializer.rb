class WeightSerializer < ActiveModel::Serializer
  attributes :id, :weight
  has_one :user
end
