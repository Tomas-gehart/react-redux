class RenameTableUserchannelss < ActiveRecord::Migration[5.2]
  def change
        rename_table :user_channelss, :channelss_users
  end
end
