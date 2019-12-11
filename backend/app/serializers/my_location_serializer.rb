class MyLocationSerializer < ActiveModel::Serializer
  attributes :id, :title, :human_address, :location_type, :county, :zipcode
end
