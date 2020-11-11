class CreateTableUserroom < ActiveRecord::Migration[5.2]
  def change
    create_table :table_user_rooms, id: false do |t|
      t.integer :user_id
      t.integer :room_id
    end
  end
end
