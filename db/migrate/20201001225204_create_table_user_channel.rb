class CreateTableUserChannel < ActiveRecord::Migration[5.2]
  def change
    create_table :table_user_channels, id: false do |t|
      t.integer :user_id
      t.integer :channel_id
    end
  end
end
