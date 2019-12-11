class BloodPressureSerializer < ActiveModel::Serializer
  attributes :id, :systolic, :diastolic, :puls, :stress_level
  has_one :user
end
