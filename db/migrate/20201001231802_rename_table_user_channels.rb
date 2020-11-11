class RenameTableUserrooms < ActiveRecord::Migration[5.2]
  def change
        rename_table :user_rooms, :rooms_users
  end
end
