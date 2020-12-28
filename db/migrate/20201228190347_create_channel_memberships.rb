class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|

      t.timestamps
    end
  end
end
