class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :user_message
      t.string :ai_respond

      t.timestamps
    end
  end
end
