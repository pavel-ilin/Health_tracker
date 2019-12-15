class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :zipcode

  has_many :metabolic_panels
  has_many :vitamine_panels
  has_many :cholesterols
  has_many :weights
  has_many :blood_pressures

  has_many :conversations
  has_many :location_ratings
end
