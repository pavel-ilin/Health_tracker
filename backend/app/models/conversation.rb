class Conversation < ApplicationRecord
  belongs_to :user
  has_many :message
end
