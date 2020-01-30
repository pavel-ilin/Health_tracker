class BloodPressure < ApplicationRecord
  belongs_to :user

  validates_presence_of :systolic
  validates_presence_of :diastolic
  validates_presence_of :puls
  validates_presence_of :stress_level
  validates :stress_level, numericality: {greater_than: 0, less_than_or_equal_to: 100}
  validates_presence_of :user_id
end
