class Message < ApplicationRecord
    belongs_to :user
    Message.create content: 'hello world'
end
