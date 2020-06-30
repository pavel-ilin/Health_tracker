class CreateMetabolicPanels < ActiveRecord::Migration[6.0]
  def change
    create_table :metabolic_panels do |t|
      t.integer :sodium
      t.integer :glucose
      t.integer :calcium
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
