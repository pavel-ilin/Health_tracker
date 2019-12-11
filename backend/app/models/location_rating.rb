class LocationRating < ApplicationRecord
  belongs_to :user
  belongs_to :my_location
end
