class AlterUserchannelsTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :table_user_channelss, :user_channelss
  end
end
