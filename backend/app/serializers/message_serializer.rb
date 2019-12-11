class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_message, :ai_respond
end
