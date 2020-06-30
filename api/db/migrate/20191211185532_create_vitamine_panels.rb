class CreateVitaminePanels < ActiveRecord::Migration[6.0]
  def change
    create_table :vitamine_panels do |t|
      t.integer :d
      t.integer :b12
      t.integer :a1
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
