class RenameTableUserChannels < ActiveRecord::Migration[5.2]
  def change
        rename_table :user_channels, :channels_users
  end
end
