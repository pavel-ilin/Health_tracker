class CreateMyLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :my_locations do |t|
      t.string :title
      t.string :human_address
      t.string :location_type
      t.string :county
      t.integer :zipcode

      t.timestamps
    end
  end
end
