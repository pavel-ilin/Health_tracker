class CholesterolSerializer < ActiveModel::Serializer
  attributes :id, :ldl, :hdl, :triglycerides, :total_cholesterol
  has_one :user
end
