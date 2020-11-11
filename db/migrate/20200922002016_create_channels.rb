class Createrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :admin_id
      t.boolean :is_private

      t.timestamps
    end
  end
end
