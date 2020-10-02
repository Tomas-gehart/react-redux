class AlterUserChannelTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :table_user_channels, :user_channels
  end
end
