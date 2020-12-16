class AddchannelsIdtoMessages < ActiveRecord::Migration[5.2]
  def change
    add_reference(:messages, :channels, type: :integer)

  end
end
