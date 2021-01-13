class AddColToChannelMembership < ActiveRecord::Migration[5.2]
  def change
    add_column :user_id, :channel_id
  end
end
