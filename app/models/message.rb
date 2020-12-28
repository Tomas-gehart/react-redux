class Message < ApplicationRecord

    validates :user_id, :channel_id, :body, null: false

    belongs_to :user_id

    belongs_to :channel

end
