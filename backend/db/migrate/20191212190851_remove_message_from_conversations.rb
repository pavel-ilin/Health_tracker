class RemoveMessageFromConversations < ActiveRecord::Migration[6.0]
  def change
    remove_reference :conversations, :message, null: false, foreign_key: true
  end
end
