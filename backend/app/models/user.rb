class User < ApplicationRecord
  has_many :metabolic_panels
  has_many :vitamine_panels
  has_many :cholesterols
  has_many :weights
  has_many :blood_pressures

  has_many :conversations
  has_many :messages, through: :conversations

  has_many :location_ratings
  has_many :my_locations, through: :location_ratings

  has_secure_password

  validates_presence_of :username
  validates_presence_of :password
  validates_presence_of :name
  validates_presence_of :email
  validates_presence_of :zipcode
  validates_uniqueness_of :username, :case_sensitive => false
end
