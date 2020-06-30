class MetabolicPanelSerializer < ActiveModel::Serializer
  attributes :id, :sodium, :glucose, :calcium
end
