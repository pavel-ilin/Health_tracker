class BloodPressure < ApplicationRecord
  belongs_to :user

  validates_presence_of :systolic
  validates_presence_of :diastolic
  validates_presence_of :puls
  validates_presence_of :stress_level
  validates_presence_of :user_id
end
