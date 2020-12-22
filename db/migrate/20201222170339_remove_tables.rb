class RemoveTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :channels
    drop_table :channels_users
    drop_table :messages


  end
end
