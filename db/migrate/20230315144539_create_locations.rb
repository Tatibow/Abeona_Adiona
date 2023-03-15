class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :address
      t.integer :review_id

      t.timestamps
    end
  end
end
