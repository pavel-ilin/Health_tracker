class Cholesterol < ApplicationRecord
  belongs_to :user


  validates_presence_of :ldl
  validates_presence_of :hdl
  validates_presence_of :triglycerides
  validates_presence_of :total_cholesterol
  validates_presence_of :user_id
end
