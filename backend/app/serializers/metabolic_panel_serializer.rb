class MetabolicPanelSerializer < ActiveModel::Serializer
  attributes :id, :sodium, :glucose, :calcium
  has_one :user
end
