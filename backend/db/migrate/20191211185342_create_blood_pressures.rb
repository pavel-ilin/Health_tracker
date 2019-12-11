class CreateBloodPressures < ActiveRecord::Migration[6.0]
  def change
    create_table :blood_pressures do |t|
      t.integer :systolic
      t.integer :diastolic
      t.integer :puls
      t.integer :stress_level
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
