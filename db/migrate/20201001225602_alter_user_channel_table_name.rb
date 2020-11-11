class AlterUserroomTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :table_user_rooms, :user_rooms
  end
end
