class VitaminePanelSerializer < ActiveModel::Serializer
  attributes :id, :d, :b12, :a1
  has_one :user
end
