class AddroomIdtoMessages < ActiveRecord::Migration[5.2]
  def change
    add_reference(:messages, :room, type: :integer)

  end
end
