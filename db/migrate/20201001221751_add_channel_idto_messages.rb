class AddChannelIdtoMessages < ActiveRecord::Migration[5.2]
  def change
    add_reference(:messages, :channel, type: :integer)

  end
end
