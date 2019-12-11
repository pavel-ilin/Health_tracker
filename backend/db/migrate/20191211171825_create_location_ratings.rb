class CreateLocationRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :location_ratings do |t|
      t.integer :rate
      t.string :comment
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :my_location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
