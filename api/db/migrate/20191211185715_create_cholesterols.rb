class CreateCholesterols < ActiveRecord::Migration[6.0]
  def change
    create_table :cholesterols do |t|
      t.integer :ldl
      t.integer :hdl
      t.integer :triglycerides
      t.integer :total_cholesterol
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
