class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :place_name
      t.text :experience
      t.text :reccommendations
      t.string :safeness
      t.integer :review_likes
      t.integer :user_id

      t.timestamps
    end
  end
end
