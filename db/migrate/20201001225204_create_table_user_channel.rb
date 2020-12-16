class CreateTableUserchannels < ActiveRecord::Migration[5.2]
  def change
    create_table :table_user_channelss, id: false do |t|
      t.integer :user_id
      t.integer :channels_id
    end
  end
end
